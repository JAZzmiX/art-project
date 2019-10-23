import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

import { LocaleService } from 'src/app/shared/locale.service';
import { CategoryCategoriesQuery } from 'src/app/generated/graphql';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-category-description',
  templateUrl: './category-description.component.html',
  styleUrls: ['./category-description.component.scss']
})
export class CategoryDescriptionComponent implements OnInit, OnDestroy {
  categoryDesc: Observable<CategoryCategoriesQuery['category']>;
  showSpinner = true;

  localeChangedSubscription: Subscription;
  slugSubscription: Subscription;
  metaSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private meta: Meta,
    private titleService: Title
  ) { }

  ngOnInit() {
    // get Description category
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            this.categoryDesc = this.dataStorageService.getCagegoryCategories(slug, locale);
          }
        );
      }
    );

    // Meta Tags
    this.metaSubscription = this.categoryDesc.subscribe(
      data => {
        this.showSpinner = false;
        data.forEach(props => {
          if (props.translations && props.translations.length > 0) {
            this.titleService.setTitle( props.translations[0].metaTitle );
            this.meta.updateTag({name: 'description', content: props.translations[0].metaDescription});
          }
        });
      }
    );
  }

  ngOnDestroy() {
    this.localeChangedSubscription.unsubscribe();
    this.slugSubscription.unsubscribe();
    this.metaSubscription.unsubscribe();
  }
}
