import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { AdminTranslationsService } from './admin-translations.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { GetTranslationsQuery, LocalesQuery, Pages, GetTranslationKeyQuery } from 'src/app/generated/graphql';
import { NbToastrService } from '@nebular/theme';
interface Translatable {
  locale: string;
  value: string;
  id?: string;
}
@Component({
  selector: 'app-translatations',
  templateUrl: './translatations.component.html',
  styleUrls: ['./translatations.component.scss']
})
export class TranslatationsComponent implements OnInit, OnDestroy {
  listTranslationGQL: Observable<GetTranslationsQuery['translation']>;
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'] = [];
  translationsForm: FormGroup;
  translationsFormUpdate: FormGroup;
  translationsFormLang: FormGroup;
  showAddLocale = false;
  showUpdate = false;
  showAddTranslate = false;
  currentJustify = 'start';
  pages = [
    'main',
    'exhibitions',
    'exhibition',
    'works',
    'work',
    'artists',
    'artist',
    'news',
    'footer',
    'header'
  ];
  getTranslationKeyQuery: Observable<GetTranslationKeyQuery['translation']>;
  listKey: GetTranslationKeyQuery['translation'] = [];

  keyChanged = new Subject<string>();
  searchTermChanged = new Subject<string>();
  localeChangedSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  localesSubscription: Subscription;
  keyChangedSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private translationsService: AdminTranslationsService,
    private fb: FormBuilder,
    private toastrService: NbToastrService
    ) { }

  ngOnInit() {
    this.locales = this.localeService.getLanguages();
    this.keyChangedSubscription = this.keyChanged.subscribe(key => {
      this.getTranslationKeyQuery = this.translationsService.getTranslationKey(key);
      this.getTranslationKeyQuery.subscribe(keys => this.listKey = keys);
    });

    this.localesSubscription = this.locales.subscribe(
      locales => {
        this.localesList = locales;
        this.translationsForm = this.fb.group({
          key: ['', Validators.required],
          pageSelect: ['', Validators.required],
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
        this.translationsFormUpdate = this.fb.group({
          key: '',
          keyValues: this.fb.array(locales.map(locale => this.getFormGroupForLocaleUpdate(locale)))
        });
      }
    );

    this.translationsFormLang = this.fb.group({
      page: ['', Validators.required],
      localeSelect: ['', Validators.required],
      key: ['', Validators.required],
      value: ['', Validators.required]
    });

    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.searchTermSubjectSubscription = this.searchTermChanged.pipe(
          debounceTime(800),
          distinctUntilChanged()
          ).subscribe((searchTerm: string) => {
            this.listTranslationGQL = this.translationsService.getAdminTranslations(locale, `%${searchTerm}%`);
        });
      }
    );
    this.getTranslationlist();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      value: ['', Validators.required],
      locale: [language.id]
    });
  }

  private getFormGroupForLocaleUpdate(language) {
    return this.fb.group({
      value: ['', Validators.required],
      id: ['', Validators.required],
      locale: [language.id]
    });
  }

  get localeFormArray() {
    return (<FormArray>this.translationsForm.get('translatable')).controls;
  }

  get localeFormUpdateArray() {
    return (<FormArray>this.translationsFormUpdate.get('keyValues')).controls;
  }

  getTranslateKey(key: string) {
    this.showUpdate = true;
    this.keyChanged.next(key);
  }
  onAddLocale() {
    const page = this.translationsFormLang.value.page;
    const locale: string = this.translationsFormLang.value.localeSelect;
    const key: string = this.translationsFormLang.value.key;
    const value: string = this.translationsFormLang.value.value;
    if (this.translationsFormLang.valid) {
      this.showAddToast(value);
      console.log(this.translationsFormLang.value);
      this.translationsService.createTranslations(locale, key, value, page).subscribe();
      this.translationsFormLang.reset();
      this.getTranslationlist();
    }
  }

  onAdd() {
    const page = this.translationsForm.value.pageSelect;
    const key: string = this.translationsForm.value.key;
    const translations: [Translatable] = this.translationsForm.value.translatable;
    if (this.translationsForm.valid) {
      translations.forEach(item => {
        this.translationsService.createTranslations(item.locale, key, item.value, page).subscribe();
      });
      console.log(this.translationsForm.value);
      this.showAddToast(key);
      this.translationsForm.reset();
      this.getTranslationlist();
    }
  }

  onResetInput() {
    this.translationsForm.reset();
    this.translationsFormUpdate.reset();
  }

  onUpdate() {
    const translations: [Translatable] = this.translationsFormUpdate.value.keyValues;
    if (this.translationsFormUpdate.valid) {
      translations.forEach(item => {
        this.translationsService.updateTranslations(item.id, item.value).subscribe();
        this.showAddToast(item.value);
      });
      // console.log(this.translationsFormUpdate.value);
      this.translationsFormUpdate.reset();
      this.getTranslationlist();
    }
  }

  showAddToast(key: string) {
    this.toastrService.show(status, ` добавлен ключ: ${key}`, {status: 'success', icon: 'save-outline', iconPack: 'eva' });
  }

  getTranslationlist() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.listTranslationGQL = this.translationsService.getAdminTranslations(locale);
      }
    );
  }

  filterTitle(searchTerm: string) {
    if (searchTerm) {
      this.searchTermChanged.next(`%${searchTerm}%`);
    }
    if (searchTerm === '' && searchTerm.length <= 0) {
      this.listTranslationGQL = this.translationsService.getAdminTranslations(localStorage.getItem('languageId'));
    }
  }

  onShowAddLocale() {
    this.showAddLocale = true;
  }

  closeUpdateModale() {
    this.showUpdate = false;
  }

  ngOnDestroy() {
    if (this.keyChangedSubscription) {
      this.keyChangedSubscription.unsubscribe();
    }
    if (this.searchTermSubjectSubscription) {
      this.searchTermSubjectSubscription.unsubscribe();
    }
    if (this.localesSubscription) {
      this.localesSubscription.unsubscribe();
    }
    if (this.localeChangedSubscription) {
      this.localeChangedSubscription.unsubscribe();
    }
  }

}
