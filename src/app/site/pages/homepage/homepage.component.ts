import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import {
  StaticTranslationQuery,
  WorksHomePageQuery,
  ExhibitionListQuery,
  SliderQuery,
  ButtonsSlugsQuery,
  HomePageQuery,
  AllEventsHomeQuery,
  GoodsHomeQuery} from 'src/app/generated/graphql';
import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { DataHomepageStorageService } from 'src/app/shared/data-homepage-storage.service';

const categoryId = environment.categoryId;
const homePageId = environment.homePageId;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit, OnDestroy {
  exhibitionCards: Observable<ExhibitionListQuery['exhibition']>;
  worksCards: Observable<WorksHomePageQuery['work']>;
  sliderImagesQuery: Observable<SliderQuery['slider']>;
  slides: SliderQuery['slider'];
  showSpinner = true;
  staticTranslation: Observable<StaticTranslationQuery['translation']>;
  buttonssMore: Observable<ButtonsSlugsQuery['categoryI18n']>;
  homepageQuery: Observable<HomePageQuery['pageI18n']>;
  eventList: Observable<AllEventsHomeQuery['newsI18n']>;
  goodsCards: Observable<GoodsHomeQuery['work']>;
  homePageDesc: string;

  // default limites
  exhibLimit = 3;
  worksLimit = 4;
  goodsLimit = 4;
  eventsLimit = 10;
  // hardcode slug for buttons
  btnMoreExhibitions = '';
  btnMoreEvents = '';
  btnMoreArtists = '';
  btnMoreShop = '';
  translation: any;
  homePageSubscription: Subscription;
  translationSubscription: Subscription;
  localeSubscription: Subscription;
  buttonssMoreSubscription: Subscription;
  sliderImagesSubscription: Subscription;

  constructor(private localeService: LocaleService,
              private dataHomepageStorageService: DataHomepageStorageService,
              private translationService: TranslationService,
              private meta: Meta,
              private titleService: Title) { }

  ngOnInit() {
    this.localeSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.homepageQuery = this.dataHomepageStorageService.getHomePage(locale, homePageId);
      this.homePageSubscription = this.homepageQuery.subscribe(data => {
        // Meta Tags
        if (data && data.length > 0) {
          this.titleService.setTitle( data[0].metaTitle );
          this.meta.updateTag({name: 'description', content: data[0].metaDescription});
          this.homePageDesc = data[0].body;
        }
      });

      this.eventList = this.dataHomepageStorageService.getAllEventsHome(locale, this.eventsLimit);

      this.worksCards = this.dataHomepageStorageService.getArtistWorks(locale, this.worksLimit);

      this.exhibitionCards = this.dataHomepageStorageService.getExhibitionWorks(locale, this.exhibLimit);

      this.goodsCards = this.dataHomepageStorageService.getGoodsForHome(locale, this.goodsLimit);

      this.sliderImagesQuery = this.dataHomepageStorageService.getSlider(locale);
      this.sliderImagesSubscription = this.sliderImagesQuery.subscribe(slides => {
        this.showSpinner = false;
        this.slides = slides;
      });

      this.buttonssMore = this.dataHomepageStorageService.getButtonsSlugs(locale, categoryId.artists,
        categoryId.events, categoryId.exhibitions, categoryId.shop);

      this.buttonssMoreSubscription = this.buttonssMore.subscribe(slugs => {
        if (slugs && slugs.length > 0) {
          this.btnMoreExhibitions = slugs[0].slug;
          this.btnMoreEvents = slugs[1].slug;
          this.btnMoreArtists = slugs[2].slug;
          this.btnMoreShop = slugs[3].slug;
        }
      });
    });

    this.translationSubscription = this.translationService.translationSubject.subscribe(data => this.translation = data);
  }

  ngOnDestroy() {
    this.homePageSubscription.unsubscribe();
    this.localeSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
    this.buttonssMoreSubscription.unsubscribe();
    this.sliderImagesSubscription.unsubscribe();
  }
}
