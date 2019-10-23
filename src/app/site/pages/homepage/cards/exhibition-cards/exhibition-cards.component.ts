import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ExhibitionListQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'app-exhibition-cards',
  templateUrl: './exhibition-cards.component.html',
  styleUrls: ['./exhibition-cards.component.scss']
})
export class ExhibitionCardsComponent implements OnInit, OnDestroy {
  timeZone: string = new Date().getTimezoneOffset().toString();
  @Input() exhibitionCards: Observable<ExhibitionListQuery['exhibition']>;
  @Input() translation: any;
  showSpinner = true;

  showSpinnerSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.showSpinnerSubscription = this.exhibitionCards.subscribe(() => this.showSpinner = false);
  }

  ngOnDestroy() {
    this.showSpinnerSubscription.unsubscribe();
  }

}
