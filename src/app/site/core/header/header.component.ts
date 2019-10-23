import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { LocalesQuery } from 'src/app/generated/graphql';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { TranslationService } from 'src/app/shared/translation.service';
import { AuthenticationService } from '../../auth/authentication';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  @Input() navigationHeader: [];
  @Input() showSpinner: boolean;

  isCollapsed = true;
  isActiveLocale: string;
  translation: any;
  isDefaultLang: any;
  isAuthorized = false;
  languages: Observable<LocalesQuery['locale']>;

  translationSubscription: Subscription;
  languageSubscription: Subscription;
  authServiceSubscription: Subscription;

  constructor(
    private localeService: LocaleService,
    private traslationService: TranslationService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authServiceSubscription = this.authService.isAuthorized().subscribe(login => this.isAuthorized = login);

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

    this.translationSubscription = this.traslationService.translationSubject
      .subscribe( data => this.translation = data );
  }

  changeLang(langId: string) {
    this.localeService.setLocale(langId);
  }

  ngOnDestroy() {
    this.authServiceSubscription.unsubscribe();
    this.languageSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
  }

}
