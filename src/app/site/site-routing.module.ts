import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { SiteComponent } from './site.component';
import { SlugRouterComponent } from './core/slug-router/slug-router.component';
import { SearchComponent } from './pages/search/search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { PublicGuard } from 'ngx-auth';

const siteRoutes: Routes = [
  {path: '', component: SiteComponent, children: [
    {path: '', component: HomepageComponent, canActivate: [ PublicGuard ]},
    {path: 'auth', component: AuthComponent},
    {path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
    {path: 'search', component: SearchComponent},
    {path: ':slug', component: SlugRouterComponent}
  ]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forChild(siteRoutes)
  ],
  exports: [RouterModule]
})
export class SiteRoutingModule {}
