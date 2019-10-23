import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocaleService } from 'src/app/shared/locale.service';
import { PageQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  pageQuery: Observable<PageQuery['page']>;
  title = '';
  description = '';

  pageSubscription: Subscription;
  localeChangedSubscription: Subscription;
  slugChangedSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private meta: Meta,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugChangedSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            this.pageQuery = this.dataStorageService.getPages(locale, slug);
          }
        );
      }
    );
    this.pageSubscription = this.pageQuery.subscribe(data => {
      data.forEach(props => {
        if (props && props.translations.length > 0) {
          if (props.translations[0].title) {
          this.title = props.translations[0].title;
          }
          if (props.translations[0].body) {
            this.description = props.translations[0].body;
          }
          // Meta Tags
          if (props.translations[0].metaTitle) {
            this.titleService.setTitle(props.translations[0].metaTitle);
          }
          if (props.translations[0].metaDescription) {
            this.meta.updateTag({name: 'description', content: props.translations[0].metaDescription});
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.localeChangedSubscription.unsubscribe();
    this.slugChangedSubscription.unsubscribe();
  }

}
