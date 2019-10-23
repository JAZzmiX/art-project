import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CategoryCategoriesQuery, WorkCategoryQuery } from 'src/app/generated/graphql';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';

@Component({
  selector: 'app-cotegory-work',
  templateUrl: './cotegory-work.component.html',
  styleUrls: ['./cotegory-work.component.scss']
})

export class CotegoryWorkComponent implements OnInit, OnDestroy {
  showSpinner = true;
  loading = true;
  titleDesc = '';
  categoryDesc = '';
  categoryDescQuery: Observable<CategoryCategoriesQuery['category']>;
  workCategoryQuery: Observable<WorkCategoryQuery>;
  workList: WorkCategoryQuery['workCategory'] = [];
  SearchTermQuery: Observable<WorkCategoryQuery>;
  totalAmount: number;
  translation: any;
  limit = 7;
  offset = 0;
  browser: Observable<boolean>;
  // sideBar
  openedSideBar = true;
  autoCollapseWidth = 500;

  searchTermCahnged = new Subject<string>();
  checkSearchCahnged = new BehaviorSubject<boolean>(false);
  offsetChanged = new BehaviorSubject<number>(0);

  categoryDescSubscription: Subscription;
  localeSubscription: Subscription;
  slugChangedSubscription: Subscription;
  idCatChangedSubscription: Subscription;
  workListChangedSubscription: Subscription;
  translationSubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  workListSearchSubscription: Subscription;
  checkSearchCahngedSearchSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private translationService: TranslationService,
    private dataStorageService: DataStorageService,
    private checkBrowserService: CheckBrowserService,
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;
     // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(translation => this.translation = translation);

    this.localeService.localeChanged.subscribe((locale: string) => {
       // get category description
      this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
        (slug: string) => {
          this.categoryDescQuery = this.dataStorageService.getCagegoryCategories(slug, locale);
        }
      );
      this.idCatChangedSubscription = this.dataStorageService.categoryIdChanged.subscribe(
        (catId: string) => {
          this.checkSearchCahngedSearchSubscription = this.checkSearchCahnged.subscribe(
            searchЕext => {
              if (searchЕext) {
                this.searchTermSubjectSubscription =  this.searchTermCahnged.pipe(
                  debounceTime(800),
                  distinctUntilChanged()
                  ).subscribe( search => {
                    this.SearchTermQuery = this.dataStorageService.getWorksList(locale, this.limit, 0, catId, search);
                    this.workListSearchSubscription = this.SearchTermQuery.subscribe(
                      query => {
                        this.workList = query.workCategory;
                      }
                    );
                  }
                );
              } else {
                this.offsetSubjectSubscription = this.offsetChanged.subscribe(
                  (offset: number) => {
                    this.workCategoryQuery = this.dataStorageService.getWorksList(locale, this.limit, offset, catId, null);
                  }
                );
                this.workListChangedSubscription = this.workCategoryQuery.subscribe(
                  query => {
                    this.totalAmount = query.metadata.info.count;
                  }
                );
              }
            }
          );
        }
      );
    });

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
    this.getWorks();
  }


  filterTitle(value: string) {
    if (value !== '') {
      this.offset = 0;
      this.workList = [];
      this.checkSearchCahnged.next(true);
      this.loading = false;
      this.searchTermCahnged.next(`%${value}%`);
    }
    if ('') {
      this.checkSearchCahnged.next(false);
      this.searchTermCahnged.next(`%%`);
    }
  }

  getWorks() {
    this.offset += this.limit;
    this.offsetChanged.next(this.offset);
    this.workListChangedSubscription = this.workCategoryQuery.subscribe(
      query => {
        query.workCategory.forEach(
          work => {
            this.loading = false;
            if (this.workList.length <= this.totalAmount ) {
              this.workList.push(work);
            }
          }
        );
      }
    );
  }

  toggleSidebar() {
    this.openedSideBar = !this.openedSideBar;
  }

  ngOnDestroy() {
    this.categoryDescSubscription.unsubscribe();
    this.slugChangedSubscription.unsubscribe();
    this.workListChangedSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();
    this.idCatChangedSubscription.unsubscribe();
    if (this.workListSearchSubscription) {
      this.workListSearchSubscription.unsubscribe();
    }
    if (this.searchTermSubjectSubscription) {
      this.searchTermSubjectSubscription.unsubscribe();
    }
    if (this.checkSearchCahngedSearchSubscription) {
      this.checkSearchCahngedSearchSubscription.unsubscribe();
    }
  }

}
