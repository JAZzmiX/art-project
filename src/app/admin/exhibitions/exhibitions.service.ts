import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  GetExhibitionListGQL,
  GetExhibitionItemGQL,
  UpdateExhibitionGQL,
  UpdateExhibitionTranslationGQL,
  CreateExhibitionGQL,
  CreateExhibitionTranslationGQL,
  DeleteExhibitionGQL,
  CreateExhibitionFileGQL,
  DeleteFileGQL,
  GetWorkIdsGQL,
  WorksForExhibitionGQL
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionsService {

  constructor(
    private exhibitionListGQL: GetExhibitionListGQL,
    private exhibitionGQL: GetExhibitionItemGQL,
    private updateExhibitionGQL: UpdateExhibitionGQL,
    private updateExhibitionTranslationGQL: UpdateExhibitionTranslationGQL,
    private createExhibitionGQL: CreateExhibitionGQL,
    private createExhibitionTranslationGQL: CreateExhibitionTranslationGQL,
    private deleteExhibitionGQL: DeleteExhibitionGQL,
    private createExhibitionFileGQL: CreateExhibitionFileGQL,
    private deleteFileGQL: DeleteFileGQL,
    private getWorkIdsGQL: GetWorkIdsGQL,
    private worksForExhibitionGQL: WorksForExhibitionGQL
  ) { }

  getExhibitionList(
    localeId: string,
    searchTerm?: string,
    limit?: number,
    offset?: number
  ) {
    return this.exhibitionListGQL.watch({
      localeId,
      searchTerm,
      limit,
      offset
    }, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.exhibition));
  }

  getExhibition(exhibId: string) {
    return this.exhibitionGQL.watch({exhibId}, {fetchPolicy: 'no-cache'})
      .valueChanges.pipe(map(({data}) => data.exhibition));
  }


  getWorksFromExhibitionId(exhibId: string, localeId: string) {
    return this.worksForExhibitionGQL.watch({exhibId, localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.work));
  }


  updateExhibition(
    exhibitionId: string,
    startDate?: string,
    endDate?: string,
    image?: File,
    showInMainPage?: boolean,
    worksToInsert?: string[],
    worksToDelete?: string[]
  ) {
    return this.updateExhibitionGQL.mutate({
      exhibitionId,
      showInMainPage,
      startDate,
      endDate,
      image,
      worksToInsert,
      worksToDelete
    }, {context: {useMultipart: true}}).pipe(map(({data}) => data));
  }

  updateExhibitionLocale(
    exhibitionId: string,
    localeId: string,
    title?: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string
  ) {
    return this.updateExhibitionTranslationGQL
      .mutate({
        exhibitionId,
        localeId,
        title,
        desc,
        metaTitle,
        metaDescription
      }).pipe(map(({data}) => data));
  }

  createExhibition(
    startDate: string,
    image?: File,
    showInMainPage?: boolean,
    endDate?: string,
    works?: [string]
  ) {
    return this.createExhibitionGQL
      .mutate({
        startDate,
        image,
        showInMainPage,
        endDate,
        works

      }, {context: {useMultipart: true}}).pipe(map(({data}) => data));
  }

  createExhibitionLocale(
    exhibitionId: string,
    localeId: string,
    title: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string
  ) {
    return this.createExhibitionTranslationGQL
      .mutate({
        exhibitionId,
        localeId,
        title,
        desc,
        metaTitle,
        metaDescription
      }).pipe(map(({data}) => data)).pipe(map(({data}) => data));
  }

  createFile(
    localeId: string,
    file: File,
    exhibitionId: string
  ) {
    return this.createExhibitionFileGQL.mutate({
      localeId,
      file,
      exhibitionId
      }, {context: {useMultipart: true}}).pipe(map(({data}) => data));
  }

  deleteFile(id: string) {
    return this.deleteFileGQL.mutate({id}).pipe(map(({data}) => data));
  }

  getWorksIds(localeId?: string, searchWork?: string) {
    return this.getWorkIdsGQL.watch({
      localeId,
      searchWork,
    }).valueChanges.pipe(map(({data}) => data.work));
  }

  deleteExhibition(exhibitionId: string) {
    return this.deleteExhibitionGQL
      .mutate({exhibitionId}).pipe(map(({data}) => data));
  }
}
