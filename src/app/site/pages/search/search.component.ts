import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { SearchQuery } from 'src/app/generated/graphql';

import { LocaleService } from 'src/app/shared/locale.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchQuery: Observable<SearchQuery['search']>;
  searchTermCahnged = new Subject<string>();
  limit = 50;
  translation: any;
  localeChangedSubscription: Subscription;
  searchTermSubjectSubscription: Subscription;
  translationSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private translationService: TranslationService) { }

  ngOnInit() {
     // get static translation
    this.translationSubscription = this.translationService.translationSubject.subscribe(translation => this.translation = translation);

    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.searchTermSubjectSubscription =  this.searchTermCahnged.pipe(
          debounceTime(800),
          distinctUntilChanged()
          ).subscribe( search => {
            this.searchQuery = this.dataStorageService.getSearch(locale, search, this.limit);
        });
      });
  }

  filterTitle(value: string) {
    if (value !== '') {
      this.searchTermCahnged.next(`%${value}%`);
    }
    if ('') {
      this.searchTermCahnged.next(`%%`);
    }
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
    this.localeChangedSubscription.unsubscribe();
    this.searchTermSubjectSubscription.unsubscribe();
  }

}
