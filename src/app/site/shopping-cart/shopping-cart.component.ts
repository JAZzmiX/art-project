import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { LocaleService } from 'src/app/shared/locale.service';
import { CartListQuery } from 'src/app/generated/graphql';
import { CheckBrowserService } from 'src/app/shared/check-browser.service';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  counter = 0;
  ids = [];
  carts: any;
  showBtnCart = true;
  translation: any;
  browser: Observable<boolean>;
  cartListQuery: Observable<CartListQuery['cart']>;
  cartListQueryAdd: Observable<CartListQuery['cart']>;
  cartList: CartListQuery['cart'] = [];
  addToCartSubscription: Subscription;
  cartListSubscription: Subscription;
  addedToCartChangedSubscription: Subscription;
  localeServiceSubscription: Subscription;
  onRemoveProductSubscription: Subscription;
  browserSubscription: Subscription;
  cartListQueryAddSubscription: Subscription;
  dataStorageServiceubscription: Subscription;
  translationSubscription: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private localeService: LocaleService,
    private modalService: NgbModal,
    private checkBrowserService: CheckBrowserService,
    private translationService: TranslationService) { }

  ngOnInit() {
    // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(data => this.translation = data);

    this.browser = this.checkBrowserService.browserChanged;
    this.dataStorageServiceubscription = this.dataStorageService.counterCartChanged.subscribe(count => {
      this.counter = count;
    });
    this.localeServiceSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.addedToCartChangedSubscription = this.dataStorageService.addedToCartCanged.subscribe(
          (id: string) => {
            this.counter += 1;
            this.showBtnCart = true;
            this.dataStorageService.setCounterCart(this.counter);
            this.addToCartSubscription = this.dataStorageService.addToCart(id, 1).subscribe();
            this.browserSubscription = this.browser.subscribe(
              isBrowser => {
                if (isBrowser) {
                  setTimeout(() => {
                  this.cartListQueryAdd = this.dataStorageService.getCartList(locale, id);
                  this.cartListQueryAddSubscription = this.cartListQueryAdd.subscribe(products => {
                    products.forEach(data => {
                      this.cartList.push(data);
                    });
                  });
                  }, 500);
                }
              }
            );
          }
        );
        this.browserSubscription = this.browser.subscribe(
          isBrowser => {
            if (isBrowser) {
              this.cartListQuery = this.dataStorageService.getCartList(locale, null);
              this.cartListSubscription = this.cartListQuery.subscribe(product => {
                // console.log(product);
                if (product.length === 0) {
                  this.showBtnCart = false;
                  this.dataStorageService.setCounterCart(0);
                }
                product.forEach(data => {
                  console.log(data);
                  this.cartList.push(data);
                });
              });

            }
          }
        );
      }
    );
  }

  onRemoveProduct(index: number, idProduct: string) {
    this.onRemoveProductSubscription = this.dataStorageService.rmProductInCart(idProduct).subscribe();
    this.cartList.splice(index, 1);
    this.counter -= 1;
    if (this.counter <= 0) {
      this.modalService.dismissAll();
    }
    this.dataStorageService.setCounterCart(this.counter);
  }

  OnCheckout() {
    this.modalService.open(CheckoutComponent, {
      size: 'lg'
    });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();

    if (this.cartListQueryAddSubscription) {
      this.cartListQueryAddSubscription.unsubscribe();
    }

    if (this.dataStorageServiceubscription) {
      this.dataStorageServiceubscription.unsubscribe();
    }

    if (this.browserSubscription) {
      this.browserSubscription.unsubscribe();
    }

    if (this.addToCartSubscription) {
      this.addToCartSubscription.unsubscribe();
    }
    if (this.onRemoveProductSubscription) {
      this.onRemoveProductSubscription.unsubscribe();
    }
    if (this.cartListSubscription) {
      this.cartListSubscription.unsubscribe();
    }
    if (this.addedToCartChangedSubscription) {
      this.addedToCartChangedSubscription.unsubscribe();
    }
    if (this.localeServiceSubscription) {
      this.localeServiceSubscription.unsubscribe();
    }
  }

}

