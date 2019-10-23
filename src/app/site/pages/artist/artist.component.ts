import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

import { GetArtistLocaleQuery, ArtistI18n } from 'src/app/generated/graphql';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {
  showSpinner = true;
  loading = true;
  artistQuery: Observable<GetArtistLocaleQuery['artist']>;
  artist: ({ __typename?: 'artistI18n' } &
          Pick<ArtistI18n, 'id' | 'slug' | 'metaTitle' | 'name' | 'metaDescription' | 'description' | 'localeId'>)[];
  artistWorks = [];
  translation: any;
  limit = 9;
  offset = 0;
  offsetSubject = new BehaviorSubject<number>(0);
  hiddenBtnMoreWorks = false;
  browser: Observable<boolean>;

  offsetSubjectSubscription: Subscription;
  localeChangedSubscription: Subscription;
  artistDescriptionSubscription: Subscription;
  slugChangedSubscription: Subscription;
  translationSubscription: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private localeService: LocaleService,
    private translationService: TranslationService,
    private checkBrowserService: CheckBrowserService,
    private meta: Meta,
    private titleService: Title) {}

  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;
    // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(data => this.translation = data);

    // get data of the artist with the necessary locale
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            // initial work set
            this.offsetSubjectSubscription = this.offsetSubject.subscribe(
              offset => {
                this.artistQuery = this.dataStorageService.getArtistLocale(slug, locale, this.limit, offset);
              }
            );
            this.artistDescriptionSubscription = this.artistQuery.subscribe(
              (data) => {
                this.showSpinner = false;
                data.forEach(
                  props => {
                    // get artist description
                    (props.translations && props.translations.length > 0) ? this.artist = props.translations : this.artist = null;
                    if (props.works && props.works.length > 0) {
                      this.offset -= this.limit;
                      this.onMoreWorks();
                      console.log(props.metadata.info.count);
                    }

                    // check length for hidden button more works if exist on preloading all work
                    if ( this.artistWorks && this.artistWorks.length >= props.metadata.info.count) {
                      this.hiddenBtnMoreWorks = true;
                      this.loading = false;
                    }


                    // Meta Tags
                    if (this.artist) {
                      this.titleService.setTitle( this.artist[0].metaTitle );
                      this.meta.updateTag({name: 'description', content: this.artist[0].metaDescription});
                    }
                  }
                );
            });
          }
        );
      }
    );
  }

  onMoreWorks() {
    this.offset += this.limit;
    this.offsetSubject.next(this.offset);
    // get offset works and add to works array
    this.artistQuery.subscribe(
      data => {
        data.forEach(
          props => {
            if (props.works && props.works.length > 0) {
              props.works.forEach(
                work => {
                  this.artistWorks.push(work);
                  // check length for hidden button more works
                  if (this.artistWorks && this.artistWorks.length >= props.metadata.info.count) {
                    this.hiddenBtnMoreWorks = true;
                    this.loading = false;
                  }
                }
              );
            }
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.slugChangedSubscription.unsubscribe();
    this.artistDescriptionSubscription.unsubscribe();
    this.localeChangedSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
  }

}
