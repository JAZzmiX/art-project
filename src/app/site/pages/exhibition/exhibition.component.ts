import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

import { GetExhibitionLocaleQuery, ExhibitionI18n } from 'src/app/generated/graphql';
import { LocaleService } from 'src/app/shared/locale.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  showSpinner = true;
  loading = true;
  browser: Observable<boolean>;

  exhibitionDescription: ({ __typename?: 'exhibitionI18n'; } &
    Pick<ExhibitionI18n, 'id' | 'slug' | 'metaTitle' | 'title' | 'metaDescription' | 'body' | 'localeId'>)[] = [];
  exhibitionQuery: Observable<GetExhibitionLocaleQuery['exhibition']>;
  exhibitionWorks = [];
  image = '';
  startDate = '';
  endDate = '';
  limit = 10;
  offset = 0;
  pdfFile = '';
  hiddenBtnMoreWorks = false;
  offsetSubject = new BehaviorSubject<number>(0);
  translation: any;
  localeSubscription: Subscription;
  exhibitionSubscription: Subscription;
  slugSubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  translationSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private translationService: TranslationService,
    private checkBrowserService: CheckBrowserService,
    private titleService: Title,
    private meta: Meta) { }


  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;
    // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(data => this.translation = data);

    this.localeSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            // initial work set
            this.offsetSubjectSubscription = this.offsetSubject.subscribe(
              offset => {
                this.exhibitionQuery = this.dataStorageService.getExhibitionLocale(slug, locale, this.limit, offset);
              }
            );
            // description exhibition
            this.exhibitionSubscription = this.exhibitionQuery.subscribe(
              data => {
                this.showSpinner = false;
                data.forEach(
                  props => {
                    // get props exhibition
                    (props.image) ? this.image = props.image : this.image = null;
                    (props.startDate) ? this.startDate = props.startDate : this.startDate = null;
                    (props.endDate) ? this.endDate = props.endDate : this.endDate = null;
                    (props.translations && props.translations.length > 0) ?
                      this.exhibitionDescription = props.translations : this.exhibitionDescription = null;
                    (props.files && props.files.length > 0 && props.files[0].fileName) ?
                      this.pdfFile = props.files[0].fileName : this.pdfFile = null;
                    // get exhibition works
                    if (props.exhibitionWorks && props.exhibitionWorks.length > 0) {
                      this.offset -= this.limit;
                      this.onMoreWorks();
                    }

                    // check length for hidden button more works if exist on preloading all work
                    if ( this.exhibitionWorks && this.exhibitionWorks.length >= props.metadata.info.count) {
                      this.hiddenBtnMoreWorks = true;
                    }

                    // Meta Tags
                    if (this.exhibitionDescription) {
                      this.titleService.setTitle( this.exhibitionDescription[0].metaTitle );
                      this.meta.updateTag({name: 'description', content: this.exhibitionDescription[0].metaDescription});
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  }


  onMoreWorks() {
    this.offset += this.limit;
    this.offsetSubject.next(this.offset);

    // get offset works and add to exhibitionWorks array
    this.exhibitionQuery.subscribe(
      data => {
        data.forEach(
          props => {
            this.loading = false;
            if (props.exhibitionWorks && props.exhibitionWorks.length > 0) {
              props.exhibitionWorks.forEach(
                work => {
                  this.exhibitionWorks.push(work);
                  // check length for hidden button more works
                  if (this.exhibitionWorks && this.exhibitionWorks.length >= props.metadata.info.count) {
                    this.hiddenBtnMoreWorks = true;
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
    this.localeSubscription.unsubscribe();
    this.exhibitionSubscription.unsubscribe();
    this.slugSubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
  }

}
