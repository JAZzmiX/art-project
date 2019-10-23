import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { NavigationService } from './navigation.service';
import {
  GetNavListQuery,
  LocalesQuery,
  GetNavItemQuery,
  Navigation_Floats,
  CreateNavigationTranslationData,
  CreateNavigationIdMutation} from 'src/app/generated/graphql';
import { LocaleService } from 'src/app/shared/locale.service';
import { NbToastrService } from '@nebular/theme';

interface UpdateLocaleNav {
  name: string;
  link: string;
  locale: string;
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  navListQuery: Observable<GetNavListQuery['navigation']>;
  navList: GetNavListQuery['navigation'] = [];
  currentJustify = 'start';
  selectedFloat = 'left';
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'];
  navIdListQuery: Observable<GetNavItemQuery['navigation']>;
  navIdList: GetNavItemQuery['navigation'];
  newNavItem: Observable<CreateNavigationIdMutation>;
  navExistId = '';
  formUpdate: FormGroup;
  createLocaleForm: FormGroup;
  createNavItem: FormGroup;
  ShowAddLocale = false;
  showUpdate = false;
  navIdChanged = new Subject<string>();
  navIdChangedSubscription: Subscription;
  localeChangedSubscription: Subscription;
  navListQuerySubscription: Subscription;
  localesSubscription: Subscription;
  navIdListQuerySubscription: Subscription;
  navIdSubscription: Subscription;
  constructor(
    private navService: NavigationService,
    private localeService: LocaleService,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.navIdChangedSubscription = this.navIdChanged.subscribe(
      (id: string) => {
       this.navExistId = id;
       this.navIdListQuery = this.navService.getNavItem(id);
       this.navIdListQuerySubscription = this.navIdListQuery.subscribe(navIds => {
        this.navIdList = navIds;
        });
      }
    );
    this.locales = this.localeService.getLanguages();
    this.localesSubscription = this.locales.subscribe(
      locales => {
        this.localesList = locales;
        this.formUpdate = this.fb.group({
          id: '',
          position: 0,
          showInHeader: false,
          float: 'left',
          showInFooter: false,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
        this.createNavItem = this.fb.group({
          position: 0,
          showInHeader: false,
          float: 'left',
          showInFooter: false,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
      }
    );

    this.createLocaleForm = this.fb.group({
      id: ['', Validators.required],
      localeId: ['', Validators.required],
      dataCreateLocale: this.fb.group({
        name: ['', Validators.required],
        link: ''
      })
    });

    this.getNavList();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      name: ['', Validators.required],
      link: '',
      locale: [language.id, Validators.required]
    });
  }

  get localeFormUpdateArray() {
    return (<FormArray>this.formUpdate.get('translatable')).controls;
  }

  onCreateNavItem() {
    const showInHeader: boolean = this.createNavItem.value.showInHeader;
    const showInFooter: boolean = this.createNavItem.value.showInFooter;
    const position: number = this.createNavItem.value.position;
    const floatNav: Navigation_Floats = this.createNavItem.value.float;
    const translatable: [UpdateLocaleNav] = this.createNavItem.value.translatable;
    if (this.createNavItem.valid) {
       this.navIdSubscription = this.navService.createNavItem(showInHeader, showInFooter, floatNav).subscribe(
         ({data}) => {
           translatable.forEach(localeItem => {
             this.navService.createNavItemLocale(data.createNavigation.id, localeItem.locale, localeItem.name, localeItem.link).subscribe();
            });
          this.navService.updateNavPosition(data.createNavigation.id, position).subscribe();
      });
      setTimeout(() => {
        this.showToast('Пункт меню создан', 'plus-outline');
        this.getNavList();
      }, 500);
      this.ShowAddLocale = false;
      this.createNavItem.reset();
    }
  }

  onSetLocale() {
    const id: string = this.createLocaleForm.value.id;
    const locale: string = this.createLocaleForm.value.localeId;
    const data: CreateNavigationTranslationData = this.createLocaleForm.value.dataCreateLocale;
    if (this.createLocaleForm.valid) {
      this.navService.createNavItemLocale(id, locale, data.name, data.link).subscribe();
      setTimeout(() => {
        this.showToast('Перевод добавлен', 'plus-outline');
        this.getNavList();
      }, 500);
      this.ShowAddLocale = false;
      this.createLocaleForm.reset();
    }
  }

  onUpdate() {
    const id: string = this.formUpdate.value.id;
    const position: number = this.formUpdate.value.position;
    const showInHeader: boolean = this.formUpdate.value.showInHeader;
    const float: Navigation_Floats = this.formUpdate.value.float;
    const showInFooter: boolean = this.formUpdate.value.showInFooter;
    const translatable: [UpdateLocaleNav] = this.formUpdate.value.translatable;

    if (this.formUpdate.valid) {
        this.navService.updateNavItem(id, true, showInHeader, showInFooter, float).subscribe();
        this.navService.updateNavPosition(id, position).subscribe();
        translatable.forEach(item => {
          this.navService.updateNavItemLocale(id, item.locale, item.name, item.link).subscribe();
        });
        setTimeout(() => {
          this.showToast('Данные обновлены', 'save-outline');
          this.getNavList();
        }, 500);
        this.formUpdate.reset();
    }
  }

  onRemove(id: string) {
    this.navService.removeNavId(id).subscribe();
    setTimeout(() => {
      this.getNavList();
      this.showToast('Удалено', 'trash-2-outline');
    }, 500);
  }

  onEdit(id: string) {
    this.showUpdate = true;
    this.navIdChanged.next(id);
  }

  showToast(text: string, icon: string) {
    this.toastrService.show(status, text, {status: 'success', icon, iconPack: 'eva' });
  }

  getNavList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.navListQuery = this.navService.getNavList(locale);
        this.navListQuerySubscription = this.navListQuery.subscribe(
          navList => {
            this.navList = navList;
          }
        );
      }
    );
  }

  onShowAddLocale() {
    this.ShowAddLocale = true;
  }

  closeUpdateModale() {
    this.showUpdate = false;
  }

  ngOnDestroy() {
    if (this.navIdListQuerySubscription) {
      this.navIdListQuerySubscription.unsubscribe();
    }
    if (this.navIdSubscription) {
      this.navIdSubscription.unsubscribe();
    }
    this.navIdChangedSubscription.unsubscribe();
    this.localesSubscription.unsubscribe();
    this.navListQuerySubscription.unsubscribe();
    if (this.localeChangedSubscription) {
      this.localeChangedSubscription.unsubscribe();
    }
  }
}
