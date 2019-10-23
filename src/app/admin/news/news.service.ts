import { Injectable } from '@angular/core';
import {
  CreateNewsItemIdGQL,
  CreateNewsItemTranslationGQL,
  UpdateNewsItemDateGQL,
  UpdateNewsItemTranslationGQL,
  GetNewsItemGQL,
  GetNewsListGQL,
  DeleteNewsGQL
} from 'src/app/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private createNewsItemIdGQL: CreateNewsItemIdGQL,
    private createNewsItemTranslationGQL: CreateNewsItemTranslationGQL,
    private updateNewsItemDateGQL: UpdateNewsItemDateGQL,
    private updateNewsItemTranslationGQL: UpdateNewsItemTranslationGQL,
    private getNewsItemGQL: GetNewsItemGQL,
    private getNewsListGQL: GetNewsListGQL,
    private deleteNewsGQL: DeleteNewsGQL
  ) { }

    getItemNews(newsId: string) {
      return this.getNewsItemGQL.watch({newsId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.news));
    }

    getNewsList(localeId: string, searchTerm?: string, limit?: number, offset?: number) {
      return this.getNewsListGQL.watch({localeId, searchTerm, limit, offset}, {fetchPolicy: 'no-cache'})
        .valueChanges.pipe(map(({data}) => data.news));
    }

    updateNewsItemDate(newsId: string, date: string) {
      return this.updateNewsItemDateGQL.mutate({newsId, date});
    }

    updateNewsItemTranslation(
      newsId: string,
      localeId: string,
      title: string,
      body?: string,
      metaTitle?: string,
      metaDescription?: string) {
      return this.updateNewsItemTranslationGQL.mutate({
        newsId,
        localeId,
        title,
        body,
        metaTitle,
        metaDescription
      });
    }

    createNewsItemId(date: string) {
      return this.createNewsItemIdGQL.mutate({date});
    }

    createNewsItemTranslation(
      newsId: string,
      localeId: string,
      title: string,
      body: string,
      metaTitle?: string,
      metaDescription?: string
      ) {
      return this.createNewsItemTranslationGQL.mutate({
        newsId,
        localeId,
        title,
        body,
        metaTitle,
        metaDescription
      });
    }

    removeNews(newsId: string) {
      return this.deleteNewsGQL.mutate({newsId});
    }
}
