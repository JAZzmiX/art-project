import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { WorkListGQL, WorkItemGQL, GetWorkArtistGQL, CreateWorkGQL, CreateWorkLocaleGQL, DeleteWorkGQL } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(
    private workListGQL: WorkListGQL,
    private workItemGQL: WorkItemGQL,
    private getWorkArtistGQL: GetWorkArtistGQL,
    private createWorkGQL: CreateWorkGQL,
    private createWorkLocaleGQL: CreateWorkLocaleGQL,
    private deleteWorkGQL: DeleteWorkGQL
  ) { }

  getWorkItem(workId: string) {
    return this.workItemGQL.watch({workId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.work));
  }

  getWorkList(localeId: string, searchTerm?: string, limit?: number, offset?: number) {
    return this.workListGQL.watch({localeId, searchTerm, limit, offset}).valueChanges.pipe(map(({data}) => data.work));
  }

  getWorkArtist() {
    return this.getWorkArtistGQL.watch({}).valueChanges.pipe(map(({data}) => data.artist));
  }

  createWork(
    images: [],
    artistId: string,
    techniqueId?: string,
    basisId?: string,
    schoolId?: string,
    provenanceId?: string,
    showInMainPage?: boolean,
    forSale?: boolean,
    price?: number,
  ) {
    return this.createWorkGQL.mutate({
      images,
      artistId,
      showInMainPage,
      forSale,
      price,
      techniqueId,
      basisId,
      schoolId,
      provenanceId
    }).pipe(map(({data}) => data));
  }

  createWorkLocale(
    workId: string,
    localeId: string,
    title: string,
    body: string,
    metaTitle: string,
    metaDescription: string
  ) {
    return this.createWorkLocaleGQL.mutate({
      workId,
      localeId,
      title,
      body,
      metaTitle,
      metaDescription
    }).pipe(map(({data}) => data));
  }

  deleteWork(workId: string) {
    return this.deleteWorkGQL.mutate({
      workId
    }).pipe(map(({data}) => data));
  }
}
