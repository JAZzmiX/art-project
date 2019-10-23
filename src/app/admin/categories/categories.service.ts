import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  CategoryitemGQL,
  CategoryListGQL,
  CreateCategoryGQL,
  CreateCategoryTranslationGQL,
  UpdateCategoryGQL,
  UpdateCategoryTranslationGQL,
  DeleteCategoryGQL
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private categoryItemGQL: CategoryitemGQL,
    private categoryListGQL: CategoryListGQL,
    private createCategoryGQL: CreateCategoryGQL,
    private createCategoryTranslationGQL: CreateCategoryTranslationGQL,
    private updateCategoryGQL: UpdateCategoryGQL,
    private updateCategoryTranslationGQL: UpdateCategoryTranslationGQL,
    private deleteCategoryGQL: DeleteCategoryGQL
  ) { }

  getCategoryItem(categoryId: string) {
    return this.categoryItemGQL.watch({categoryId}, {fetchPolicy: 'no-cache'})
      .valueChanges.pipe(map(({data}) => data.category));
  }

  getCategoryList(localeId: string, searchTerm?: string, limit?: number, offset?: number) {
    return this.categoryListGQL.watch({localeId, searchTerm, limit, offset}, {fetchPolicy: 'no-cache'})
      .valueChanges.pipe(map(({data}) => data.category));
  }

  updateCategory(id: string, photo: string, parentId: string) {
    return this.updateCategoryGQL.mutate({
      id,
      photo,
      parentId,
    }).pipe(map(({data}) => data));
  }

  updateCategoryLocale(
    catId: string,
    localeId: string,
    name?: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string
  ) {
    return this.updateCategoryTranslationGQL.mutate({
      catId,
      localeId,
      name,
      desc,
      metaTitle,
      metaDescription
    }).pipe(map(({data}) => data));
  }

  createCategory(parentId?: string, photo?: string, showInShop?: boolean) {
    return this.createCategoryGQL.mutate({
      parentId,
      photo,
      showInShop
    }).pipe(map(({data}) => data));
  }

  createCategoryLocale(
    id: string,
    localeId: string,
    name: string,
    desc?: string,
    metaTitle?: string,
    metaDescription?: string
  ) {
    return this.createCategoryTranslationGQL.mutate({
      id,
      localeId,
      name,
      desc,
      metaTitle,
      metaDescription
    }).pipe(map(({data}) => data));
  }

  deleteCategory(id: string) {
    return this.deleteCategoryGQL.mutate({id}).pipe(map(({data}) => data));
  }
}
