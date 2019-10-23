import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { ProtectedGuard } from 'ngx-auth';
import { TranslatationsComponent } from './translatations/translatations.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { ArtistComponent } from './artist/artist.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { WorksComponent } from './works/works.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { CategoriesComponent } from './categories/categories.component';


const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [ ProtectedGuard ], children: [
    {path: '', component: DashboardComponent},
    {path: 'page', component: PageComponent},
    {path: 'translations', component: TranslatationsComponent},
    {path: 'navigation', component: NavigationComponent},
    {path: 'news', component: NewsComponent},
    {path: 'artist', component: ArtistComponent},
    {path: 'work', component: WorksComponent},
    {path: 'exhibition', component: ExhibitionsComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'shop-category', component: ShopCategoryComponent},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
