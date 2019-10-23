import { Component, Input, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GoodsHomeQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'app-goods-cards',
  templateUrl: './goods-cards.component.html',
  styleUrls: ['./goods-cards.component.scss']
})
export class GoodsCardsComponent implements OnChanges, OnDestroy {
  @Input() goodsCards: Observable<GoodsHomeQuery['work']>;
  @Input() translation: any;

  showSpinner = true;
  showSpinnerSubscription: Subscription;
  constructor() { }

  ngOnChanges() {
    this.showSpinnerSubscription = this.goodsCards.subscribe(() => this.showSpinner = false);
  }


  ngOnDestroy() {
    this.showSpinnerSubscription.unsubscribe();
  }
}
