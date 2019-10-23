import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  CreateArtistGQL,
  CreateArtistTranslationGQL,
  UpdateArtistTranslationGQL,
  DeleteArtistGQL,
  GetArtistListGQL,
  GetArtistGQL
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private createArtistGQL: CreateArtistGQL,
    private createArtistTranslationGQL: CreateArtistTranslationGQL,
    private updateArtistTranslationGQL: UpdateArtistTranslationGQL,
    private getArtistListGQL: GetArtistListGQL,
    private getArtistGQL: GetArtistGQL,
    private deleteArtistGQL: DeleteArtistGQL
  ) { }

  getArtistList(
    localeId: string,
    searchTerm?: string,
    limit?: number,
    offset?: number
  ) {
    return this.getArtistListGQL.watch({localeId, searchTerm, limit, offset}, {fetchPolicy: 'no-cache'})
      .valueChanges.pipe(map(({data}) => data.artist));
  }

  getArtist(artistId: string) {
    return this.getArtistGQL.watch({artistId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.artist));
  }

  createArtistId(artistPhoto?: any) {
    return this.createArtistGQL.mutate({artistPhoto});
  }

  createArtistLocale(
    artistId: string,
    localeId: string,
    name: string,
    desc?: string,
    date?: string,
    metaTitle?: string,
    metaDesc?: string
  ) {
    return this.createArtistTranslationGQL.mutate({
      artistId,
      localeId,
      name,
      desc,
      date,
      metaTitle,
      metaDesc
    });
  }

  updateArtistLocale(
    artistId: string,
    localeId: string,
    name: string,
    desc?: string,
    date?: string,
    metaTitle?: string,
    metaDesc?: string
  ) {
    return this.updateArtistTranslationGQL.mutate({
      artistId,
      localeId,
      name,
      desc,
      date,
      metaTitle,
      metaDesc
    });
  }

  deleteArtist(artistId: string) {
    return this.deleteArtistGQL.mutate({artistId});
  }
}
