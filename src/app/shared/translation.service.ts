import { Injectable, OnDestroy } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { LocaleService } from './locale.service';
import { Subscription, Observable, ReplaySubject } from 'rxjs';
import { StaticTranslationQuery } from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnDestroy {
  staticTranslation: Observable<StaticTranslationQuery['translation']>;
  staticTranslationSubscription: Subscription;
  staticTranslationQuerySubscription: Subscription;
  translation: any;
  translationSubject = new ReplaySubject();

  constructor(private dataStorageService: DataStorageService, private localeService: LocaleService) {
    this.staticTranslationQuerySubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.staticTranslation = this.dataStorageService.getStaticTraslations(locale);
        this.staticTranslationSubscription = this.staticTranslation.subscribe(
         data => {
           // CRUTCH collect the object from the array keys
          this.translation = Object.assign({}, ...data.map(item => ({[item['key']]: item})));
          this.translationSubject.next(this.translation);
         }
        );
      }
    );

    // this.translationSubject.subscribe( x => console.log('tser', x));
  }

  ngOnDestroy() {
    this.staticTranslationQuerySubscription.unsubscribe();
    this.staticTranslationSubscription.unsubscribe();
  }
}
