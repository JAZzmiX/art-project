import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  PagesGQL,
  UpdatePageQueryGQL,
  UpdatePageMutationGQL,
  CratePageIdGQL,
  DeletePageIdGQL,
  CratePageLocaleGQL } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private pagesGQL: PagesGQL,
    private updatePageGQL: UpdatePageQueryGQL,
    private updatePageMutationGQL: UpdatePageMutationGQL,
    private createPageIdGQL: CratePageIdGQL,
    private cratePageLocaleGQL: CratePageLocaleGQL,
    private deletePageIdGQL: DeletePageIdGQL,
    ) { }

  getPages(localeId?: string, searchTerm?: string) {
    return this.pagesGQL.watch({localeId, searchTerm}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.page));
  }
  cratePageLocale(
    pageId: string,
    localeId: string,
    title: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string) {
    return this.cratePageLocaleGQL.mutate({
      localeId,
      pageId,
      title,
      desc,
      metaTitle,
      metaDescription
    });
  }

  createPageId() {
    return this.createPageIdGQL.mutate().pipe(map(({data}) => data));
  }

  deletePageId(pageId: string) {
    return this.deletePageIdGQL.mutate({pageId});
  }

  updatePageDes(
    pageId: string,
    localeId: string,
    title: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string) {
    return this.updatePageMutationGQL.mutate({
      localeId,
      pageId,
      title,
      desc,
      metaTitle,
      metaDescription});
  }

  getPageForUpdate(pageId: string) {
    return this.updatePageGQL.watch({pageId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.page));
  }
}
