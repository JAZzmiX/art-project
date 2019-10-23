import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

import { ExhibitionCategoryQuery, CategoryCategoriesQuery } from 'src/app/generated/graphql';
import { LocaleService } from 'src/app/shared/locale.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';

@Component({
  selector: 'app-cotegory-exhibitions',
  templateUrl: './cotegory-exhibitions.component.html',
  styleUrls: ['./cotegory-exhibitions.component.scss']
})
export class CotegoryExhibitionsComponent implements OnInit, OnDestroy {
  showSpinner = true;
  loading = true;
  activeClass = 'onAllExhibitions';
  categoryDescQuery: Observable<CategoryCategoriesQuery['category']>;
  exhibitionQuery: Observable<ExhibitionCategoryQuery>;
  exhibitionSearchQuery: Observable<ExhibitionCategoryQuery>;
  exhibitionList: ExhibitionCategoryQuery['exhibition'] = [];
  totalAmount: number;
  limit = 6;
  offset = 0;
  translation: any;
  titleDesc = '';
  categoryDesc = '';
  endLte = null;
  endGte = null;
  startLte = null;
  startGte = null;
  browser: Observable<boolean>;
  orderBy: any = 'desc';
  nowDate = new Date().toUTCString();
  timeZone: string = new Date().getTimezoneOffset().toString();
  searchTermSubject = new Subject<string>();
  checkSearchCahnged = new BehaviorSubject<boolean>(false);
  offsetSubject = new BehaviorSubject<number>(0);
  localeSubscription: Subscription;
  slugChangedSubscription: Subscription;
  categoryDescSubscription: Subscription;
  exhibitionQuerySubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  translationSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  exhibitionSearchSubscription: Subscription;
  checkSearchCahngedSearchSubscription: Subscription;

  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private translationService: TranslationService,
    private checkBrowserService: CheckBrowserService,
    private meta: Meta,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;
    // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(translation => {
      this.translation = translation;
      // console.log(translation);
    });

    this.localeSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
      // get category description
      this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
        (slug: string) => {
          this.categoryDescQuery = this.dataStorageService.getCagegoryCategories(slug, locale);
        }
      );
      this.checkSearchCahngedSearchSubscription = this.checkSearchCahnged.subscribe(
        searchЕext => {
          if (searchЕext) {
            this.searchTermSubjectSubscription =  this.searchTermSubject.pipe(
              debounceTime(800),
              distinctUntilChanged()
              ).subscribe( search => {
                this.exhibitionSearchQuery = this.dataStorageService.getExhibitionList(locale, this.limit, 0, search);
                this.exhibitionSearchSubscription = this.exhibitionSearchQuery.subscribe(
                  query => {
                    this.exhibitionList = query.exhibition;
                  }
                );
            });
          } else {
              this.offsetSubjectSubscription = this.offsetSubject.subscribe(
                (offset: number) => {
                  this.exhibitionQuery = this.dataStorageService.getExhibitionList(
                        locale,
                        this.limit,
                        offset,
                        null,
                        this.endLte, this.endGte, this.startGte, this.startLte, this.orderBy);
                }
              );
              this.exhibitionQuerySubscription = this.exhibitionQuery.subscribe(
                query => {
                  this.totalAmount = query.metadata.info.count;
                }
              );
            }
          }
        );
      }
    );

    this.categoryDescSubscription = this.categoryDescQuery.subscribe(
      data => {
        this.showSpinner = false;
        data.forEach(props => {
          if (props && props.translations.length > 0) {
            this.titleDesc = props.translations[0].title;
            this.categoryDesc = props.translations[0].description;

            // Meta Tags
            this.titleService.setTitle( props.translations[0].metaTitle );
            this.meta.updateTag({name: 'description', content: props.translations[0].metaDescription});
          }
        });
      }
    );

    this.offset -= this.limit;
    this.getExhibition();
  }


  onAllExhibitions() {
    this.activeClass = 'onAllExhibitions';
    this.orderBy = 'desc';
    this.endLte = null;
    this.endGte = null;
    this.startLte = null;
    this.startGte = null;
    this.offset = 0;
    this.exhibitionList = [];
    this.offset -= this.limit;
    this.getExhibition();
  }
  onCurrentExhibitions() {
    this.activeClass = 'onCurrentExhibitions';
    this.orderBy = 'desc';
    this.endLte = null;
    this.endGte = this.nowDate;
    this.startLte = this.nowDate;
    this.startGte = null;
    this.offset = 0;
    this.exhibitionList = [];
    this.offset -= this.limit;
    this.getExhibition();
  }
  onUpcomingExhibitions() {
    this.activeClass = 'onUpcomingExhibitions';
    this.orderBy = 'asc';
    this.offset = 0;
    this.endLte = null;
    this.endGte = null;
    this.startLte = null;
    this.startGte = this.nowDate;
    this.exhibitionList = [];
    this.offset -= this.limit;
    this.getExhibition();
  }
  onPastExhibitions() {
    this.activeClass = 'onPastExhibitions';
    this.orderBy = 'desc';
    this.offset = 0;
    this.endLte = this.nowDate;
    this.endGte = null;
    this.startLte = null;
    this.startGte = null;
    this.exhibitionList = [];
    this.offset -= this.limit;
    this.getExhibition();
  }

  filterTitle(value: string) {
    if (value !== '') {
      this.activeClass = '';
      this.offset = 0;
      this.exhibitionList = [];
      this.checkSearchCahnged.next(true);
      this.loading = false;
      this.searchTermSubject.next(`%${value}%`);
    }
    if ('') {
      this.checkSearchCahnged.next(false);
      this.searchTermSubject.next(`%%`);
    }
  }

  getExhibition() {
    this.offset += this.limit;
    this.offsetSubject.next(this.offset);
    this.exhibitionQuerySubscription = this.exhibitionQuery.subscribe(
      query => {
        query.exhibition.forEach(
          exhibition => {
            this.loading = false;
            if (this.exhibitionList.length  <= this.totalAmount ) {
              this.exhibitionList.push(exhibition);
            }
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.localeSubscription.unsubscribe();
    if (this.exhibitionSearchSubscription) {
      this.exhibitionSearchSubscription.unsubscribe();
    }
    if (this.searchTermSubjectSubscription) {
      this.searchTermSubjectSubscription.unsubscribe();
    }
    this.categoryDescSubscription.unsubscribe();
    this.slugChangedSubscription.unsubscribe();
    this.checkSearchCahngedSearchSubscription.unsubscribe();
    this.exhibitionQuerySubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
  }

}
