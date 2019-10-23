import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule,
         NbSidebarModule,
         NbButtonModule,
         NbCardModule,
         NbInputModule,
         NbSelectModule,
         NbIconModule,
         NbToastrModule,
         NbCheckboxModule,
         NbPopoverModule,
         NbDatepickerModule,
         NbWindowModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NbDateFnsDateModule } from '@nebular/date-fns';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { PageComponent } from './page/page.component';
import { TranslatationsComponent } from './translatations/translatations.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { ArtistComponent } from './artist/artist.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { WorksComponent } from './works/works.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    PageComponent,
    TranslatationsComponent,
    NavigationComponent,
    NewsComponent,
    ArtistComponent,
    ExhibitionsComponent,
    WorksComponent,
    ShopCategoryComponent,
    CategoriesComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NgbModule,
    EditorModule,
    NbCheckboxModule,
    NbPopoverModule,
    SharedModule,
    NbWindowModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({ format: 'YYYY.MM.DD' }),
    NbToastrModule.forRoot(),
  ],
})
export class AdminModule { }
