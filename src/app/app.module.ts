import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SiteModule } from './site/site.module';
import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/ru';

registerLocaleData(localeUa, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SiteModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
