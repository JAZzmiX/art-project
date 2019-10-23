import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CategoryCategoriesQuery, WorkCategoryQuery, ShopCategoryQuery } from 'src/app/generated/graphql';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cotegory-shop',
  templateUrl: './cotegory-shop.component.html',
  styleUrls: ['./cotegory-shop.component.scss']
})

export class CotegoryShopComponent implements OnInit, OnDestroy {
  showSpinner = true;
  loading = true;
  titleDesc = '';
  categoryDesc = '';
  categoryDescQuery: Observable<CategoryCategoriesQuery['category']>;
  shopCategoryQuery: Observable<ShopCategoryQuery['category']>;
  shopListCategory = [];
  workCategoryQuery: Observable<WorkCategoryQuery>;
  workList: WorkCategoryQuery['workCategory'] = [];
  SearchTermQuery: Observable<WorkCategoryQuery>;
  totalAmount: number;
  onReset: () => any;
  selectedItem = '';
  translation: any;
  limit = 10;
  offset = 0;
  browser: Observable<boolean>;
  // sideBar
  openedSideBar = true;
  autoCollapseWidth = 500;
  isAdded = false;

  searchTermCahnged = new Subject<string>();
  checkSearchCahnged = new BehaviorSubject<boolean>(false);
  offsetChanged = new BehaviorSubject<number>(0);
  shopCatIdChanged = new BehaviorSubject<string>(environment.categoryId.shop);
  categoryDescSubscription: Subscription;
  localeSubscription: Subscription;
  slugChangedSubscription: Subscription;
  idCatChangedSubscription: Subscription;
  workListChangedSubscription: Subscription;
  translationSubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  workListSearchSubscription: Subscription;
  shopCategoryQuerySubscription: Subscription;
  checkSearchCahngedSearchSubscription: Subscription;
  workListChanged2Subscription: Subscription;
  constructor(
    private translationService: TranslationService,
    private dataStorageService: DataStorageService,
    private checkBrowserService: CheckBrowserService,
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;
     // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(translation => this.translation = translation);

        // get list category name / slug
      this.shopCategoryQuery = this.dataStorageService.getShopCategory(localStorage.getItem('languageId'), environment.categoryId.shop);
      this.shopCategoryQuerySubscription = this.shopCategoryQuery.subscribe(query => {
        if (query[0]) {
          this.shopListCategory = query[0].descendants;
        }
      });
       // get category description
      this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
        (slug: string) => {
          this.categoryDescQuery = this.dataStorageService.getCagegoryCategories(slug, localStorage.getItem('languageId'));
        }
      );
      this.idCatChangedSubscription = this.shopCatIdChanged.subscribe(
        (catId: string) => {
          this.checkSearchCahngedSearchSubscription = this.checkSearchCahnged.subscribe(
            searchЕext => {
              if (searchЕext) {
                this.searchTermSubjectSubscription = this.searchTermCahnged.pipe(
                  debounceTime(800),
                  distinctUntilChanged()
                  ).subscribe( search => {
                    this.SearchTermQuery = this.dataStorageService.getWorksList(
                      localStorage.getItem('languageId'), this.limit, 0, catId, search, true);
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
                    this.workCategoryQuery = this.dataStorageService.getWorksList(
                      localStorage.getItem('languageId'), this.limit, offset, catId, null, true);
                  }
                );
                this.workListChanged2Subscription = this.workCategoryQuery.subscribe(
                  query => {
                    this.totalAmount = query.metadata.info.count;
                  }
                );
              }
            }
          );
          this.offset -= this.limit;
          this.getWorks();
        }
      );
      this.onReset = () =>  {
        this.offset = 0;
        this.workList = [];
        this.shopCatIdChanged.next(environment.categoryId.shop);
        this.selectedItem = '';
        this.getWorks();
      };

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
  }



  onCategoryId(catID: string, item: string) {
    this.offset = 0;
    this.workList = [];
    this.shopCatIdChanged.next(catID);
    this.selectedItem = item;
    if (this.isAdded) {
      this.isAdded = false;
      this.ngOnInit();
    }
  }


  filterTitle(value: string) {
    if (value) {
      if (this.isAdded) {
        this.isAdded = false;
        this.ngOnInit();
      }
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
  onAddToCart(id: string) {
    this.ngOnDestroy();
    this.isAdded = true;
    this.dataStorageService.setItemsCart(id);
    // FIXME: fix crutch
  }
  getWorks() {
    // console.log(this.workList);
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
    if (this.categoryDescSubscription) {
      this.categoryDescSubscription.unsubscribe();
    }
    if (this.workListChanged2Subscription) {
      this.categoryDescSubscription.unsubscribe();
    }
    if (this.slugChangedSubscription) {
      this.slugChangedSubscription.unsubscribe();
    }
    if (this.workListChangedSubscription) {
      this.workListChangedSubscription.unsubscribe();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.offsetSubjectSubscription) {
      this.offsetSubjectSubscription.unsubscribe();
    }
    if (this.idCatChangedSubscription) {
      this.idCatChangedSubscription.unsubscribe();
    }
    if (this.shopCategoryQuerySubscription) {
      this.shopCategoryQuerySubscription.unsubscribe();
    }
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
