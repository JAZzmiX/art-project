import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import * as moment from 'moment';

import {
  GetNewsItemQuery,
  LocalesQuery, GetNewsListQuery,
  CreateNewsTranslationData
} from 'src/app/generated/graphql';
import { LocaleService } from 'src/app/shared/locale.service';
import { NewsService } from './news.service';

interface NewsUpdate {
  title: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  localeId: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  newsListQuery: Observable<GetNewsListQuery['news']>;
  newsItemQuery: Observable<GetNewsItemQuery['news']>;
  newsItem: GetNewsItemQuery['news'];
  searchTermChanged = new Subject<string>();
  newsItemIdChanged = new Subject<string>();
  newsId = '';
  showAddLocale = false;
  showUpdate = false;
  formUpdate: FormGroup;
  formAddLocale: FormGroup;
  formCreateNews: FormGroup;
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'];

  localeChangedSubscription: Subscription;
  searchTermChangedSubscription: Subscription;
  localesSubscription: Subscription;
  newsItemSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private newsService: NewsService,
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
              title: ['',  Validators.required],
              body: '',
              metaTitle: '',
              metaDescription: '',
            })
        });
        this.formCreateNews = this.fb.group({
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
          this.newsListQuery = this.newsService.getNewsList(locale, searchTerm);
        }
      );
    });

    this.newsItemIdChanged.subscribe(
      id => {
        this.newsId = id;
        this.newsItemQuery = this.newsService.getItemNews(id);
        this.newsItemSubscription = this.newsItemQuery.subscribe(newsItem => this.newsItem = newsItem);
      }
    );
    this.getNewsList();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      title: ['', Validators.required],
      body: '',
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
    const data: [NewsUpdate] = this.formUpdate.value.translatable;

    if (this.formUpdate.valid) {
      data.forEach(props => {
        this.newsService.updateNewsItemTranslation(
          id,
          props.localeId,
          props.title,
          props.body,
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
    const data: CreateNewsTranslationData = this.formAddLocale.value.data;

    if (this.formAddLocale.valid) {
      this.newsService.createNewsItemTranslation(
        id,
        localId,
        data.title,
        data.body,
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

  createNews() {
    const date = moment().format('YYYY-MM-DDTHH:mm:ss.sssZ');
    const data: [NewsUpdate] = this.formCreateNews.value.translatable;

    if (this.formCreateNews.valid) {
      this.newsService.createNewsItemId(date).subscribe(
        (dataId) => {
          const newsId = dataId.data.createNews.id;
          data.forEach(props => {
            this.newsService.createNewsItemTranslation(
              newsId,
              props.localeId,
              props.title,
              props.body,
              props.metaTitle,
              props.metaDescription
            ).subscribe();
        });
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Новость создана', 'plus-outline');
        this.getNewsList();
      }, 500);
      this.formAddLocale.reset();
    }
  }

  getNewsId(id: string) {
    this.showUpdate = true;
    this.newsItemIdChanged.next(id);
  }

  onShowAddLocale() {
    this.showAddLocale = true;
  }

  onShowUpdate() {
    this.showUpdate = !this.showUpdate;
  }

  getNewsList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.newsListQuery = this.newsService.getNewsList(locale);
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

  onRemoveNews(newsId: string) {
    this.newsService.removeNews(newsId).subscribe();
    setTimeout(() => {
      this.getNewsList();
      this.showToast('Удалено', 'trash-2-outline');
    }, 500);
  }

  ngOnDestroy() {
    if (this.newsItemSubscription) {
      this.newsItemSubscription.unsubscribe();
    }

    if (this.localesSubscription) {
      this.localesSubscription.unsubscribe();
    }

    if (this.localeChangedSubscription) {
      this.localeChangedSubscription.unsubscribe();
    }

    if (this.searchTermChangedSubscription) {
      this.searchTermChangedSubscription.unsubscribe();
    }
  }

}
