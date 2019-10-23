import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { GetTranslationsGQL, CreateTranslationGQL, UpdateTranslationGQL, Pages, GetTranslationKeyGQL } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})

export class AdminTranslationsService {

  constructor(
    private translationsGQL: GetTranslationsGQL,
    private createTranslationGQL: CreateTranslationGQL,
    private updateTranslationGQL: UpdateTranslationGQL,
    private getTranslationKeyGQL: GetTranslationKeyGQL
  ) { }

  getAdminTranslations(localeId: string, searchTerm?: string) {
    return this.translationsGQL.watch({localeId, searchTerm}, {fetchPolicy: 'no-cache'})
      .valueChanges.pipe(map(({data}) => data.translation));
  }

  getTranslationKey(key: string) {
    return this.getTranslationKeyGQL.watch({key}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.translation));
  }

  createTranslations(localeId: string, key: string, value: string, page: Pages) {
    return this.createTranslationGQL.mutate({key, value, localeId, page});
  }

  updateTranslations(id: string, value: string) {
    return this.updateTranslationGQL.mutate({value, id});
  }
}
