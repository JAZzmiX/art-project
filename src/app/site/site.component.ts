import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LocaleService } from '../shared/locale.service';
import { NavigationQuery } from '../generated/graphql';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  navigationListQuery: Observable<NavigationQuery['navigationI18n']>;
  navigationHeader = [];
  navigationFooterLeft = [];
  navigationFooterRight = [];
  showSpinner = true;

  localeSubscription: Subscription;
  navigationSubscription: Subscription;
  constructor(private localeService: LocaleService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.localeSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.navigationListQuery = this.dataStorageService.getNavigation(locale);

        this.navigationSubscription = this.navigationListQuery.subscribe( navList => {
          this.showSpinner = false;
          const headerNav = [];
          const footerLeftNav = [];
          const footerRightNav = [];

          this.navigationHeader = headerNav;
          this.navigationFooterLeft = footerLeftNav;
          this.navigationFooterRight = footerRightNav;

          navList.forEach( nav => {
            if (nav.navigation.showInHeader) {
              headerNav.push(nav);
            }
            if (nav.navigation.showInFooter && nav.navigation.float !== 'right') {
              footerLeftNav.push(nav);
            }
            if (nav.navigation.showInFooter && nav.navigation.float === 'right') {
              footerRightNav.push(nav);
            }

            if (nav.navigation.descendants.length > 0) {
              nav.navigation.descendants.forEach( res => {
                if (res.showInFooter && res.float !== 'right') {
                  if (res.translations.length > 0) {
                    footerLeftNav.push(res.translations[0]);
                  }
                }
                if (res.showInFooter && res.float === 'right') {
                  if (res.translations.length > 0) {
                    footerRightNav.push(res.translations[0]);
                  }
                }
              });
            }
          });
        });
      }
    );
  }

}
