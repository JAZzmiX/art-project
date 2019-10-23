import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { WorksHomePageQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})


export class WorkCardComponent implements OnInit, OnDestroy {
  @Input() worksCards: Observable<WorksHomePageQuery['work']>;
  @Input() translation: any;
  showSpinner = true;

  worksCardsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.worksCardsSubscription = this.worksCards.subscribe(() => this.showSpinner = false);
  }

  ngOnDestroy() {
    this.worksCardsSubscription.unsubscribe();
  }

}
