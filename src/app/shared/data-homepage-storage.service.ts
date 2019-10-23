import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  GoodsHomeGQL,
  HomePageGQL,
  ButtonsSlugsGQL,
  AllEventsHomeGQL,
  SliderGQL,
  WorksHomePageGQL,
  ExhibitionListGQL } from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})

export class DataHomepageStorageService {

  constructor(
    private goodsHomeGQL: GoodsHomeGQL,
    private homePageGQL: HomePageGQL,
    private buttonsSlugsGQL: ButtonsSlugsGQL,
    private allEventHomeGQL: AllEventsHomeGQL,
    private sliderGQL: SliderGQL,
    private worksHomePageGQL: WorksHomePageGQL,
    private exhibitionGQL: ExhibitionListGQL
    ) { }

  getHomePage(localeId: string, pageId: string) {
    return this.homePageGQL.watch({localeId, pageId})
      .valueChanges.pipe(map(({data}) => data.pageI18n));
  }

  getSlider(localeId: string) {
    return this.sliderGQL.watch({localeId})
      .valueChanges.pipe(map(({data}) => data.slider));
  }

  getGoodsForHome(localeId: string, limit: number) {
    return this.goodsHomeGQL.watch({localeId, limit}).valueChanges.pipe(map(({data}) => data.work));
  }

  getAllEventsHome(localeId: string, limit?: number) {
    return this.allEventHomeGQL.watch({localeId, limit})
      .valueChanges.pipe(map(({data}) => data.newsI18n));
  }

  getButtonsSlugs(localeId: string, catArtist: string, catEvent: string, catExhib: string, catShop: string) {
    return this.buttonsSlugsGQL.watch({catArtist, catEvent, catExhib, catShop, localeId})
      .valueChanges.pipe(map(({data}) => data.categoryI18n));
  }

  getArtistWorks(localeId: string, limit?: number) {
    return this.worksHomePageGQL.watch({localeId, limit})
      .valueChanges.pipe(map(({data}) => data.work));
  }

  getExhibitionWorks(localeId: string, limit?: number) {
    return this.exhibitionGQL.watch({localeId, limit})
      .valueChanges.pipe(map(({data}) => data.exhibition));
  }
}
