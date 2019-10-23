import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

import { LocaleService } from 'src/app/shared/locale.service';
import { LocalesQuery, UpdatePageQueryQuery, PagesQuery } from 'src/app/generated/graphql';
import { PageService } from './page.service';

interface ArtistInterface {
  name: string;
  description: string;
  localeId: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  pageListQuery: Observable<PagesQuery['page']>;
  pageQuery: Observable<UpdatePageQueryQuery['page']>;
  page: UpdatePageQueryQuery['page'];
  searchTermChanged = new Subject<string>();
  ItemIdChanged = new Subject<string>();
  id = '';
  showAddLocale = false;
  showUpdate = false;
  formUpdate: FormGroup;
  formAddLocale: FormGroup;
  formCreate: FormGroup;
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'];

  localeChangedSubscription: Subscription;
  searchTermChangedSubscription: Subscription;
  localesSubscription: Subscription;
  itemSubscription: Subscription;
  onCreateSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private pageService: PageService,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.locales = this.localeService.getLanguages();
    this.localesSubscription = this.locales.subscribe(
      locales => {
        this.localesList = locales;
        this.formUpdate = this.fb.group({
          id: '',
          position: 0,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
        this.formAddLocale = this.fb.group({
          id: '',
          position: 0,
          localeId: ['', Validators.required],
          data: this.fb.group({
              name: ['',  Validators.required],
              description: '',
              date: '',
              metaTitle: '',
              metaDescription: '',
            })
        });
        this.formCreate = this.fb.group({
          position: 0,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
      }
    );

    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.searchTermChangedSubscription = this.searchTermChanged.pipe(
        debounceTime(800),
        distinctUntilChanged()
      ).subscribe(
        searchTerm => {
          this.pageListQuery = this.pageService.getPages(locale, searchTerm);
        }
      );
    });

    this.ItemIdChanged.subscribe(
      id => {
        this.id = id;
        this.pageQuery = this.pageService.getPageForUpdate(id);
        this.itemSubscription = this.pageQuery.subscribe(
          Item => {
            console.log(Item);
            this.page = Item;
          }
        );
      }
    );
    this.getNewsList();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      name: ['', Validators.required],
      description: '',
      date: '',
      metaTitle: '',
      metaDescription: '',
      localeId: [language.id, Validators.required]
    });
  }

  get localeFormUpdateArray() {
    return (<FormArray>this.formUpdate.get('translatable')).controls;
  }

  onUpdate() {
    const id: string = this.formUpdate.value.id;
    const data: [ArtistInterface] = this.formUpdate.value.translatable;

    if (this.formUpdate.valid) {
      data.forEach(props => {
        this.pageService.updatePageDes(
          id,
          props.localeId,
          props.name,
          props.description,
          props.metaTitle,
          props.metaDescription).subscribe();
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Данные обновлены', 'save-outline');
        this.getNewsList();
      }, 500);
      this.formUpdate.reset();
    }
  }

  onAddLocale() {
    const id: string = this.formAddLocale.value.id;
    const localId: string = this.formAddLocale.value.localeId;
    const data: ArtistInterface = this.formAddLocale.value.data;

    if (this.formAddLocale.valid) {
      this.pageService.cratePageLocale(
        id,
        localId,
        data.name,
        data.description,
        data.metaTitle,
        data.metaDescription
      ).subscribe();

      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Перевод добавлен', 'plus-outline');
        this.getNewsList();
      }, 500);
      this.formAddLocale.reset();
    }
  }

  onCreate() {
    const data: [ArtistInterface] = this.formCreate.value.translatable;

    if (this.formCreate.valid) {
      this.onCreateSubscription = this.pageService.createPageId().subscribe(
        (dataId) => {
          console.log(dataId);
          const id = dataId.createPage.id;
          data.forEach(props => {
            this.pageService.cratePageLocale(
              id,
              props.localeId,
              props.name,
              props.description,
              props.metaTitle,
              props.metaDescription
            ).subscribe();
        });
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Страница создана', 'plus-outline');
        this.getNewsList();
      }, 500);
      console.log('form', data);
      this.formAddLocale.reset();
    }
  }

  getNewsId(id: string) {
    this.showUpdate = true;
    this.ItemIdChanged.next(id);
  }

  onShowAddLocale() {
    this.showAddLocale = true;
  }

  onShowUpdate() {
    this.showUpdate = !this.showUpdate;
  }

  getNewsList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.pageListQuery = this.pageService.getPages(locale);
    });
  }

  onSearchTerm(searchTerm: string) {
    if (searchTerm) {
      this.searchTermChanged.next(`%${searchTerm}%`);
    }
    if (searchTerm === '' && searchTerm.length <= 0) {
      this.getNewsList();
    }
  }

  showToast(text: string, icon: string) {
    this.toastrService.show(status, text, {status: 'success', icon, iconPack: 'eva' });
  }

  closeUpdateModale() {
    this.showUpdate = false;
  }

  onRemoveNews(id: string) {
    this.pageService.deletePageId(id).subscribe();
    setTimeout(() => {
      this.getNewsList();
      this.showToast('Удалено', 'trash-2-outline');
    }, 500);
  }

  ngOnDestroy() {
    if (this.onCreateSubscription) {
      this.onCreateSubscription.unsubscribe();
    }
    if (this.localesSubscription) {
      this.localesSubscription.unsubscribe();
    }
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
    if (this.localeChangedSubscription) {
      this.localeChangedSubscription.unsubscribe();
    }
    if (this.searchTermChangedSubscription) {
      this.searchTermChangedSubscription.unsubscribe();
    }
  }
}
