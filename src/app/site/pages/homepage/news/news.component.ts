import {Component, OnDestroy, Input, OnChanges} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { AllEventsHomeQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnChanges, OnDestroy {
  @Input() eventList: Observable<AllEventsHomeQuery['newsI18n']>;
  showSpinner = true;
  eventsSubscription: Subscription;

  constructor() {}
  ngOnChanges() {
    this.eventsSubscription = this.eventList.subscribe(() => this.showSpinner = false);
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
