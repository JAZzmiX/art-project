import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { LocaleService } from 'src/app/shared/locale.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { SearchSlugGQL } from 'src/app/generated/graphql';

@Component({
  selector: 'app-slug-router',
  templateUrl: './slug-router.component.html',
  styleUrls: ['./slug-router.component.scss']
})
export class SlugRouterComponent implements OnInit, OnDestroy {
  slugData: Observable<string>;

  querySubscription: Subscription;
  slugSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private localeService: LocaleService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {

    this.routeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.dataStorageService.setSlug(params.slug);
      }
    );


    this.querySubscription = this.localeService.localeChanged.subscribe(
      (locale: string) => {
        this.slugSubscription = this.dataStorageService.slugChanged.subscribe(
          (slug: string) => {
            this.slugData = this.dataStorageService.getSlug(slug, locale);
        });
      }
    );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.slugSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
