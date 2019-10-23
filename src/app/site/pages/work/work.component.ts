import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

import { GetWorkLocaleQuery, ArtistI18n } from 'src/app/generated/graphql';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
  workQuery: Observable<GetWorkLocaleQuery['work']>;
  workDesc = [];
  images = '';
  artist: { __typename?: 'artist' } & {
    translations: ({
      __typename?: 'artistI18n';
    } & Pick<ArtistI18n, 'slug' | 'name' | 'description'>)[];
  };
  artistWorks = [];
  exhibitions = [];
  size = [];
  id = '';
  technique = '';
  basis = '';
  school = '';
  provenance = '';
  price = '';
  forSale = false;
  showSpinner = true;
  loading = true;
  translation: any;
  limit = 6;
  offset = 0;
  browser: Observable<boolean>;
  offsetSubject = new BehaviorSubject<number>(0);
  hiddenBtnMoreWorks = false;
  offsetSubjectSubscription: Subscription;
  workQuerySubscription: Subscription;
  localeChangedSubscription: Subscription;
  slugChangedSubscription: Subscription;
  translationSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private translationService: TranslationService,
    private checkBrowserService: CheckBrowserService,
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
    // reloaded route
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.browser = this.checkBrowserService.browserChanged;
    // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(data => this.translation = data);

    // get data of the event with the necessary locale
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            // initial work set
            this.offsetSubjectSubscription = this.offsetSubject.subscribe(
              offset => {
                this.workQuery = this.dataStorageService.getWorkLocale(slug, locale, this.limit, offset);
              }
            );
            // description work
            this.workQuerySubscription = this.workQuery.subscribe(workProps => {
              workProps.forEach(props => {
                this.showSpinner = false;
                // get work description
                (props.translations && props.translations.length > 0) ? this.workDesc = props.translations : this.workDesc = null;
                // get Image full size
                (props.images && props.images.length > 0) ? this.images = props.images[0].full : this.images = null;
                // get artist props
                (props.artist) ? this.artist = props.artist : this.artist = null;
                // get artist works
                if (props.artist && props.artist.works && props.artist.works.length > 0) {
                  this.offset -= this.limit;
                  this. onMoreWorks();
                }
                // check length for hidden button more works if exist on preloading all work
                if ( this.artistWorks && this.artistWorks.length >= props.artist.metadata.info.count) {
                  this.hiddenBtnMoreWorks = true;
                  this.loading = false;
                }
                // get exhibitions for work
                (props.workExhibitions && props.workExhibitions.length > 0) ?
                  this.exhibitions = props.workExhibitions : this.exhibitions = null;

                // get properties work
                (props.id) ? this.id = props.id : this.id = null;
                (props.basis && props.basis.translations.length > 0) ?
                  this.basis = props.basis.translations[0].name : this.basis = null;
                (props.size && props.size.length > 0) ?
                  this.size = props.size : this.size = null;
                (props.school && props.school.translations.length > 0) ?
                  this.school = props.school.translations[0].name : this.school = null;
                (props.technique && props.technique.translations.length > 0) ?
                  this.technique = props.technique.translations[0].name : this.technique = null;
                (props.provenance && props.provenance.translations.length > 0) ?
                  this.provenance = props.provenance.translations[0].name : this.provenance = null;
                // get price work if exist
                (props.price) ? this.price = props.price : this.price = null;
                (props.forSale) ? this.forSale = props.forSale : this.forSale = false;

                // Meta Tags
                if (this.workDesc) {
                  this.titleService.setTitle( this.workDesc[0].metaTitle );
                  this.meta.updateTag({name: 'description', content: this.workDesc[0].metaDescription});
                }
              });
            });
          }
        );
      }
    );
  }

  onAddToCart(id: string) {
    this.dataStorageService.setItemsCart(id);
  }

  onMoreWorks() {
    this.offset += this.limit;
    this.offsetSubject.next(this.offset);

    // get offset works and add to works array
    this.workQuery.subscribe(
      data => {
        data.forEach(
          props => {
            if (props.artist.works && props.artist.works.length > 0) {
              props.artist.works.forEach(
                work => {
                  this.artistWorks.push(work);
                  // check length for hidden button more works
                  if (this.artistWorks && this.artistWorks.length >= props.artist.metadata.info.count) {
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
    this.localeChangedSubscription.unsubscribe();
    this.workQuerySubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();
  }
}
