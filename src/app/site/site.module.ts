import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import { FormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { SidebarModule } from 'ng-sidebar';

import { AdminModule } from '../admin/admin.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkCardComponent } from './pages/homepage/cards/work-card/work-card.component';
import { ExhibitionCardsComponent } from './pages/homepage/cards/exhibition-cards/exhibition-cards.component';
import { GoodsCardsComponent } from './pages/homepage/cards/goods-cards/goods-cards.component';
import { NewsComponent } from './pages/homepage/news/news.component';
import { SliderComponent } from './pages/homepage/slider/slider.component';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { EventComponent } from './pages/event/event.component';
import { SlugRouterComponent } from './core/slug-router/slug-router.component';
import { WorkComponent } from './pages/work/work.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { PageComponent } from './pages/page/page.component';
import { SearchComponent } from './pages/search/search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArryExistPipe } from './pipes/arry-exist.pipe';
import { LoadingComponent } from './core/loading/loading.component';
import { CotegoryEventsComponent } from './pages/category/categories/cotegory-events/cotegory-events.component';
import { CotegoryShopComponent } from './pages/category/categories/cotegory-shop/cotegory-shop.component';
import { CotegoryArtistsComponent } from './pages/category/categories/cotegory-artists/cotegory-artists.component';
import { CotegoryExhibitionsComponent } from './pages/category/categories/cotegory-exhibitions/cotegory-exhibitions.component';
import { CategoryDescriptionComponent } from './pages/category/layout/category-description/category-description.component';
import { CotegoryWorkComponent } from './pages/category/categories/category-work/cotegory-work.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { AuthComponent } from './auth/auth.component';
import { AuthenticationModule } from './auth/authentication';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SliderComponent,
    WorkCardComponent,
    NewsComponent,
    ExhibitionCardsComponent,
    SiteComponent,
    SlugRouterComponent,
    EventComponent,
    WorkComponent,
    ExhibitionComponent,
    ArtistComponent,
    PageComponent,
    SearchComponent,
    PageNotFoundComponent,
    CategoryComponent,
    ArryExistPipe,
    LoadingComponent,
    GoodsCardsComponent,
    CotegoryEventsComponent,
    CotegoryShopComponent,
    CotegoryArtistsComponent,
    CotegoryExhibitionsComponent,
    CategoryDescriptionComponent,
    CotegoryWorkComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    AuthComponent
  ],
  entryComponents: [CheckoutComponent],
  imports: [
    AdminModule,
    SiteRoutingModule,
    NgxInfiniteScrollerModule,
    AuthenticationModule,
    CommonModule,
    NgbModule,
    FormsModule,
    SidebarModule,
    SharedModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
})
export class SiteModule { }
