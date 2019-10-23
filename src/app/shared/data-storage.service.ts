import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

import {
  NavigationGQL,
  GetArtistLocaleGQL,
  GetEventLocaleGQL,
  GetWorkLocaleGQL,
  GetExhibitionLocaleGQL,
  SearchSlugGQL,
  StaticTranslationGQL,
  CategoryIdListGQL,
  CategoryCategoriesGQL,
  SocialListGQL,
  EventCategoryGQL,
  ExhibitionCategoryGQL,
  ArtistsCategoryGQL,
  WorkCategoryGQL,
  ShopCategoryGQL,
  PageGQL,
  SearchGQL,
  CartListGQL,
  AddProductToCartGQL,
  DeleteProductFromCartGQL} from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})



export class DataStorageService {
  slugChanged = new BehaviorSubject<string>('');
  counterCartChanged = new BehaviorSubject<number>(0);
  categoryIdChanged = new BehaviorSubject<string>('85109a2c-4cdc-4f07-bfc1-7b9bc1f6f056');
  addedToCartCanged = new Subject();

  constructor(
    private navigationGQL: NavigationGQL,
    private getArtistLocaleGQL: GetArtistLocaleGQL,
    private getEventLocaleGQL: GetEventLocaleGQL,
    private getWorkLocaleGQL: GetWorkLocaleGQL,
    private getExhibitionLocaleGQL: GetExhibitionLocaleGQL,
    private searchSlugGQL: SearchSlugGQL,
    private staticTranslationGQL: StaticTranslationGQL,
    private categoryIdListGQL: CategoryIdListGQL,
    private categoryCategoriesGQL: CategoryCategoriesGQL,
    private socialListGQL: SocialListGQL,
    private eventCategoryGQL: EventCategoryGQL,
    private exhibitionCategoryGQL: ExhibitionCategoryGQL,
    private artistsCategoryGQL: ArtistsCategoryGQL,
    private workCategoryGQL: WorkCategoryGQL,
    private shopCategoryGQL: ShopCategoryGQL,
    private pageGQL: PageGQL,
    private SearchPageGQL: SearchGQL,
    private cartListGQL: CartListGQL,
    private addProductToCartGQL: AddProductToCartGQL,
    private deleteProductFromCartGQL: DeleteProductFromCartGQL
    ) {
      const counter = localStorage.getItem('counter');
      if (counter) {
        this.setCounterCart(+counter);
      }
    }

  setSlug(slug: string) {
    this.slugChanged.next(slug);
  }
  setCategoryId(id: string) {
    this.categoryIdChanged.next(id);
  }

  setItemsCart(date: any) {
    this.addedToCartCanged.next(date);
  }

  setCounterCart(caunt: number) {
    this.counterCartChanged.next(caunt);
    localStorage.setItem('counter', caunt.toString());
  }

  addToCart(productId: string, quantity?: number) {
    return this.addProductToCartGQL.mutate({productId, quantity});
  }

  rmProductInCart(cartProductId: string) {
    return this.deleteProductFromCartGQL.mutate({cartProductId});
  }
  getCartList(localeId: string, workIdCart?: string) {
    return this.cartListGQL.watch({localeId, workIdCart}, {fetchPolicy: 'network-only'})
      .valueChanges.pipe(map(({data}) => data.cart));
  }

  getStaticTraslations(localeId: string) {
    return this.staticTranslationGQL.watch({localeId})
      .valueChanges.pipe(map(({data}) => data.translation));
  }

  getPages(localeId: string, slug: string) {
    return this.pageGQL.watch({localeId, slug}).valueChanges.pipe(map(({data}) => data.page));
  }

  getSlug(slug: string, localeId: string) {
    return this.searchSlugGQL
      .watch({localeId, slug})
      .valueChanges.pipe(map(({data}) => {
          // list exist page templates
          if ( data.exhibition.length > 0) {
            return 'exhibition';
          } else if (data.artist.length > 0) {
            return 'artist';
          } else if (data.category.length > 0) {
            // set category id
            if (data.category[0].translations.length > 0) {
              this.setCategoryId(data.category[0].translations[0].categoryId);
            }
            return 'category';
          } else if (data.news.length > 0) {
            return 'news';
          } else if (data.page.length > 0) {
            return 'page';
          } else if (data.work.length > 0) {
            return 'work';
          } else {
            return 'notFound';
          }
        }
      )
    );
  }
  getShopCategory(localeId: string, shopCat: string) {
    return this.shopCategoryGQL.watch({localeId, shopCat}).valueChanges.pipe(map(({data}) => data.category));
  }

  getWorksList(
    localeId: string,
    limit: number,
    offset: number,
    catId: string,
    titleSarch: string,
    forSale?: boolean
    ) {
    return this.workCategoryGQL.watch({
      localeId, limit, offset, catId, titleSarch, forSale}).valueChanges.pipe(map(({data}) => data));
  }

  getArtistList(localeId: string, limit: number, offset: number, titleSarch: string) {
    return this.artistsCategoryGQL.watch({localeId, limit, offset, titleSarch}).valueChanges.pipe(map(({data}) => data));
  }

  getExhibitionList(
    localeId: string,
    limit: number,
    offset: number,
    titleSarch?: string,
    endLte?: string, endGte?: string, startGte?: string, startLte?: string, orderBy?: any) {
    return this.exhibitionCategoryGQL.watch({localeId, limit, offset, titleSarch, endLte, endGte, startGte, startLte, orderBy})
      .valueChanges.pipe(map(({data}) => data));
  }

  getEventCatList(localeId: string, limit: number, offset: number) {
    return this.eventCategoryGQL.watch({localeId, limit, offset})
      .valueChanges.pipe(map(({data}) => data ));
  }

  getCagegory(catId: string) {
    return this.categoryIdListGQL.watch({catId}).valueChanges
      .pipe(map(({data}) => data.category));
  }

  getCagegoryCategories(slug: string, localeId: string) {
    return this.categoryCategoriesGQL.watch({slug, localeId})
      .valueChanges.pipe(map(({data}) => data.category));
  }

  getNavigation(localeId: string) {
    return this.navigationGQL.watch({localeId})
      .valueChanges.pipe(map(({data}) => data.navigationI18n));
  }

  getEventPage(localeId: string, slug: string) {
    return this.getEventLocaleGQL.watch({localeId, slug})
      .valueChanges.pipe(map(({data}) => data.news));
  }

  getArtistLocale(slug: string, localeId: string, limit: number, offset: number) {
    return this.getArtistLocaleGQL.watch({slug, localeId, limit, offset})
      .valueChanges.pipe(map(({data}) => data.artist));
  }

  getWorkLocale(slug: string, localeId: string, limit: number, offset: number) {
    return this.getWorkLocaleGQL.watch({slug, localeId, limit, offset})
      .valueChanges.pipe(map(({data}) => data.work));
  }

  getExhibitionLocale(slug: string, localeId: string, limit: number, offset: number) {
    return this.getExhibitionLocaleGQL.watch({slug, localeId, limit, offset})
      .valueChanges.pipe(map(({data}) => data.exhibition));
  }

  getSearch(localeId: string, searchTerm: string, limit?: number) {
    return this.SearchPageGQL.watch({localeId, searchTerm, limit}).valueChanges.pipe(map(({data}) => data.search));
  }

  getSocialList() {
    return this.socialListGQL.watch()
      .valueChanges.pipe(map(({data}) => data.config));
  }
}
