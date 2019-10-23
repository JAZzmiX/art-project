import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  GetNavListGQL,
  CreateNavigationIdGQL,
  CreateNavigationTranslationGQL,
  UpdateNavigationIdGQL,
  UpdateNavigationTranslationGQL,
  GetNavItemGQL,
  Navigation_Floats,
  DeleteNavigationIdGQL,
  UpdatePositionsOfNavGQL
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private getNavListGQL: GetNavListGQL,
    private getNavItemGQL: GetNavItemGQL,
    private deleteNavigationidGQL: DeleteNavigationIdGQL,
    private createNavigationIdGQL: CreateNavigationIdGQL,
    private updatePositionsOfNavGQL: UpdatePositionsOfNavGQL,
    private createNavigationTranslationGQL: CreateNavigationTranslationGQL,
    private updateNavigationIdGQL: UpdateNavigationIdGQL,
    private updateNavigationTranslationGQL: UpdateNavigationTranslationGQL
  ) { }

  getNavList(localeId: string) {
    return this.getNavListGQL.watch({localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.navigation));
  }

  getNavItem(navId: string) {
    return this.getNavItemGQL.watch({navId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.navigation));
  }

  createNavItem(
    showInHeader: boolean,
    showInFooter: boolean,
    floatNav?: Navigation_Floats,
  ) {
    return this.createNavigationIdGQL.mutate({
      showInHeader,
      showInFooter,
      floatNav,
    });
  }

  createNavItemLocale(
    navId: string,
    localeId: string,
    name: string,
    link?: string
  ) {
    return this.createNavigationTranslationGQL.mutate({
      navId,
      localeId,
      name,
      link
    });
  }

  updateNavItem(
    navId: string,
    navItemOn?: boolean,
    showInHeader?: boolean,
    showInFooter?: boolean,
    floatNav?: Navigation_Floats,
    parentId?: string
  ) {
    return this.updateNavigationIdGQL.mutate({
      navId,
      navItemOn,
      showInHeader,
      showInFooter,
      floatNav,
      parentId
    });
  }

  updateNavItemLocale(
    navId: string,
    localeId: string,
    name: string,
    link?: string
  ) {
    return this.updateNavigationTranslationGQL.mutate({
      navId,
      localeId,
      name,
      link
    });
  }

  updateNavPosition(id: string, position: number) {
    return this.updatePositionsOfNavGQL.mutate({
      id,
      position
    });
  }

  removeNavId(navId: string) {
    return this.deleteNavigationidGQL.mutate({navId});
  }
}
