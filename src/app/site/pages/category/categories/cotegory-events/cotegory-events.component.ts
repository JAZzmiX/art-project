import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { LocaleService } from 'src/app/shared/locale.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { EventCategoryQuery } from 'src/app/generated/graphql';
import { NgxInfiniteScrollerDirective } from 'ngx-infinite-scroller/src/app/ngx-infinite-scroller.directive';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';
@Component({
  selector: 'app-cotegory-events',
  templateUrl: './cotegory-events.component.html',
  styleUrls: ['./cotegory-events.component.scss']
})
export class CotegoryEventsComponent implements OnInit, OnDestroy {
  eventsQuery: Observable<EventCategoryQuery>;
  eventsList: EventCategoryQuery['newsI18n'] = [];
  totalAmount: number;
  offsetSubject = new BehaviorSubject<number>(0);
  browser: Observable<boolean>;
  limit =  10;
  offset = 0;
  loading = true;
  localeChangedSubscription: Subscription;
  eventsQuerySubscription: Subscription;
  offsetSubjectSubscription: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private checkBrowserService: CheckBrowserService,
    private localeService: LocaleService) { }


  ngOnInit() {
    this.browser = this.checkBrowserService.browserChanged;

    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
         // initial events set
         this.offsetSubjectSubscription = this.offsetSubject.subscribe(
          offset => {
            this.eventsQuery = this.dataStorageService.getEventCatList(locale, this.limit, offset);
          }
        );
      }
    );
    this.eventsQuerySubscription = this.eventsQuery.subscribe(data => {
      this.totalAmount = data.metadata.info.count;
      this.getEvent();
    });
  }

 getEvent() {
  this.offset += 5;
  this.offsetSubject.next(this.offset);
  this.eventsQuerySubscription = this.eventsQuery.subscribe(data => {
    data.newsI18n.forEach(
      item => {
        if (item) {
          this.loading = false;
          if (this.eventsList.length  <= this.totalAmount) {
            this.eventsList.push(item);
          }
        }
    });
  });
 }

  ngOnDestroy() {
    this.eventsQuerySubscription.unsubscribe();
    this.localeChangedSubscription.unsubscribe();
    this.offsetSubjectSubscription.unsubscribe();
  }

}
