import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

import { ArtistsCategoryQuery, CategoryCategoriesQuery } from 'src/app/generated/graphql';
import { TranslationService } from 'src/app/shared/translation.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';
@Component({
  selector: 'app-cotegory-artists',
  templateUrl: './cotegory-artists.component.html',
  styleUrls: ['./cotegory-artists.component.scss']
})
export class CotegoryArtistsComponent implements OnInit, OnDestroy {
  showSpinner = true;
  loading = true;
  browser: Observable<boolean>;
  titleDesc = '';
  categoryDesc = '';
  categoryDescQuery: Observable<CategoryCategoriesQuery['category']>;
  artistListQuery: Observable<ArtistsCategoryQuery>;
  artistList: ArtistsCategoryQuery['artistI18n'] = [];
  artistListSearchQuery: Observable<ArtistsCategoryQuery>;
  totalAmount: number;
  translation: any;
  limit = 18;
  offset = 0;

  searchTermCahnged = new Subject<string>();
  checkSearchCahnged = new BehaviorSubject<boolean>(false);
  offsetChanged = new BehaviorSubject<number>(0);

  categoryDescSubscription: Subscription;
  localeSubscription: Subscription;
  slugChangedSubscription: Subscription;
  artistListChangedSubscription: Subscription;
  translationSubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  artistListSearchSubscription: Subscription;
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
      this.checkSearchCahngedSearchSubscription = this.checkSearchCahnged.subscribe(
        searchЕext => {
          if (searchЕext) {
            this.searchTermSubjectSubscription =  this.searchTermCahnged.pipe(
              debounceTime(800),
              distinctUntilChanged()
              ).subscribe( search => {
                this.artistListSearchQuery = this.dataStorageService.getArtistList(locale, this.limit, 0, search);
                this.artistListSearchSubscription = this.artistListSearchQuery.subscribe(
                  query => {
                    this.artistList = query.artistI18n;
                  }
                );
            });
          } else {
              this.offsetSubjectSubscription = this.offsetChanged.subscribe(
                (offset: number) => {
                  this.artistListQuery = this.dataStorageService.getArtistList(locale, this.limit, offset, null);
                }
              );
              this.artistListChangedSubscription = this.artistListQuery.subscribe(
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
    this.getArtists();
  }

  filterTitle(value: string) {
    if (value !== '') {
      this.offset = 0;
      this.artistList = [];
      this.checkSearchCahnged.next(true);
      this.loading = false;
      this.searchTermCahnged.next(`%${value}%`);
    }
    if ('') {
      this.checkSearchCahnged.next(false);
      this.searchTermCahnged.next(`%%`);
    }
  }

  getArtists() {
    this.offset += this.limit;
    this.offsetChanged.next(this.offset);
    this.artistListChangedSubscription = this.artistListQuery.subscribe(
      query => {
        query.artistI18n.forEach(
          artist => {
            this.loading = false;
            if (this.artistList.length <= this.totalAmount ) {
              this.artistList.push(artist);
            }
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.categoryDescSubscription.unsubscribe();
    this.slugChangedSubscription.unsubscribe();
    this.artistListChangedSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();

    if (this.artistListSearchSubscription) {
      this.artistListSearchSubscription.unsubscribe();
    }
    if (this.searchTermSubjectSubscription) {
      this.searchTermSubjectSubscription.unsubscribe();
    }
    if (this.checkSearchCahngedSearchSubscription) {
      this.checkSearchCahngedSearchSubscription.unsubscribe();
    }
  }
}
