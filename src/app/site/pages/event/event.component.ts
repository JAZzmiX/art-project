import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { GetEventLocaleQuery, NewsI18n } from 'src/app/generated/graphql';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  eventQuery: Observable<GetEventLocaleQuery['news']>;
  title = '';
  description = '';
  localeChangedSubscription: Subscription;
  slugChangedSubscription: Subscription;
  metaSubscription: Subscription;

  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
     // reloaded route
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // get data of the event with the necessary locale
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            this.eventQuery = this.dataStorageService.getEventPage(locale, slug);
            this.metaSubscription = this.eventQuery.subscribe(data => {
              data.forEach( props => {
                if (props && props.translations.length > 0) {
                  if (props.translations[0].title) {
                  this.title = props.translations[0].title;
                  }
                  if (props.translations[0].body) {
                    this.description = props.translations[0].body;
                  }
                  // Meta Tags
                  if (props.translations[0].metaTitle) {
                    this.titleService.setTitle(props.translations[0].metaTitle);
                  }
                  if (props.translations[0].metaDescription) {
                    this.meta.updateTag({name: 'description', content: props.translations[0].metaDescription});
                  }
                }
              });
            });
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.metaSubscription.unsubscribe();
    this.localeChangedSubscription.unsubscribe();
    this.slugChangedSubscription.unsubscribe();
  }
}
