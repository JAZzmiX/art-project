import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CategoryIdListQuery } from 'src/app/generated/graphql';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  categoryIdsQuery: Observable<CategoryIdListQuery['category']>;

  idChangedSubscription: Subscription;
  categoryIdsSubscription: Subscription;
  categoryEvents = false;
  categoryExhibitions = false;
  categoryArtists = false;
  categoryWorks = false;
  categoryShop = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // get the category by ID in category categories
    this.idChangedSubscription = this.dataStorageService.categoryIdChanged.subscribe(
      (catId: string) => {
        this.categoryIdsQuery = this.dataStorageService.getCagegory(catId);
        // select each category id
        this.categoryIdsSubscription = this.categoryIdsQuery.subscribe(
          categoriesList => {
            categoriesList.forEach(
              (categories) => {
                // shop category
                (categories.id === environment.categoryId.shop) ?
                this.categoryShop = true : this.categoryShop = false;
                (categories && categories.newsCategories.length > 0) ?
                  this.categoryEvents = true : this.categoryEvents = false;
                (categories && categories.exhibitionCategories.length > 0) ?
                  this.categoryExhibitions = true : this.categoryExhibitions = false;
                (categories && categories.artistCategories.length > 0) ?
                  this.categoryArtists = true : this.categoryArtists = false;
                (categories && categories.categoryWorks.length > 0) ?
                  this.categoryWorks = true : this.categoryWorks = false;
              }
            );
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.idChangedSubscription.unsubscribe();
    this.categoryIdsSubscription.unsubscribe();
  }
}
