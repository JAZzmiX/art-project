import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { LocalesQuery } from '../generated/graphql';
import { LocaleService } from '../shared/locale.service';
import { AuthenticationService } from '../site/auth/authentication';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isActiveLocale: string;
  isDefaultLang: any;
  languages: Observable<LocalesQuery['locale']>;
  languageSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.languages = this.localeService.getLanguages();

    this.languageSubscription = this.languages.subscribe(locales => {
      const dafoultLocale = locales.filter(locale => locale.isDefault);
      if (dafoultLocale && dafoultLocale.length > 0) {
        if (dafoultLocale[0].id) {
          this.isDefaultLang = dafoultLocale[0];
            this.isActiveLocale = localStorage.getItem('languageId');
            (localStorage.getItem('languageId')) ?
            this.localeService.setLocale(localStorage.getItem('languageId'))
              : this.localeService.setLocale(dafoultLocale[0].id);
        }
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }
  changeLang(langId: string) {
    // console.log(langId);
    this.localeService.setLocale(langId);
  }

}
