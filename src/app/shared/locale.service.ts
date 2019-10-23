import { Injectable} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import {LocalesGQL} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})

export class LocaleService {
  /*
   * This id='85109a2c-4cdc-4f07-bfc1-7b9bc1f6f056' doesn't change anything, but we need a default string for routing
   * I have not yet understood how to pass the Observable to BehaviorSubject
   */
  localeChanged = new ReplaySubject();

  constructor(
    private localesGQL: LocalesGQL,
  ) {}

  setLocale(langId: string) {
    this.localeChanged.next(langId);
      localStorage.setItem('languageId', langId);
  }
  getLanguages() {
    return this.localesGQL.watch()
      .valueChanges.pipe(map(({data}) => data.locale));
  }
}
