import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

import { LocaleService } from 'src/app/shared/locale.service';
import { LocalesQuery, CategoryListQuery, CategoryitemQuery } from 'src/app/generated/graphql';
import { CategoriesService } from './categories.service';

interface CategoryInterface {
  name: string;
  description: string;
  localeId: string;
  metaTitle: string;
  metaDescription: string;
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categoryListQuery: Observable<CategoryListQuery['category']>;
  categoryQuery: Observable<CategoryitemQuery['category']>;
  category: CategoryitemQuery['category'];
  searchTermChanged = new Subject<string>();
  ItemIdChanged = new Subject<string>();
  id = '';
  showAddLocale = false;
  showUpdate = false;
  formUpdate: FormGroup;
  formAddLocale: FormGroup;
  formCreate: FormGroup;
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'];

  localeChangedSubscription: Subscription;
  searchTermChangedSubscription: Subscription;
  localesSubscription: Subscription;
  itemSubscription: Subscription;
  onCreateSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.locales = this.localeService.getLanguages();
    this.localesSubscription = this.locales.subscribe(
      locales => {
        this.localesList = locales;
        this.formUpdate = this.fb.group({
          id: '',
          position: 0,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
        this.formAddLocale = this.fb.group({
          id: '',
          position: 0,
          localeId: ['', Validators.required],
          data: this.fb.group({
              name: ['',  Validators.required],
              description: '',
              date: '',
              metaTitle: '',
              metaDescription: '',
            })
        });
        this.formCreate = this.fb.group({
          position: 0,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
      }
    );

    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.searchTermChangedSubscription = this.searchTermChanged.pipe(
        debounceTime(800),
        distinctUntilChanged()
      ).subscribe(
        searchTerm => {
          this.categoryListQuery = this.categoriesService.getCategoryList(locale, searchTerm);
        }
      );
    });

    this.ItemIdChanged.subscribe(
      id => {
        this.id = id;
        this.categoryQuery = this.categoriesService.getCategoryItem(id);
        this.itemSubscription = this.categoryQuery.subscribe(
          Item => {
            console.log(Item);
            this.category = Item;
          }
        );
      }
    );
    this.getNewsList();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      name: ['', Validators.required],
      description: '',
      date: '',
      metaTitle: '',
      metaDescription: '',
      localeId: [language.id, Validators.required]
    });
  }

  get localeFormUpdateArray() {
    return (<FormArray>this.formUpdate.get('translatable')).controls;
  }

  onUpdate() {
    const id: string = this.formUpdate.value.id;
    const data: [CategoryInterface] = this.formUpdate.value.translatable;

    if (this.formUpdate.valid) {
      data.forEach(props => {
        this.categoriesService.updateCategoryLocale(
          id,
          props.localeId,
          props.name,
          props.description,
          props.metaTitle,
          props.metaDescription).subscribe();
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Данные обновлены', 'save-outline');
        this.getNewsList();
      }, 500);
      this.formUpdate.reset();
    }
  }

  onAddLocale() {
    const id: string = this.formAddLocale.value.id;
    const localId: string = this.formAddLocale.value.localeId;
    const data: CategoryInterface = this.formAddLocale.value.data;

    if (this.formAddLocale.valid) {
      this.categoriesService.createCategoryLocale(
        id,
        localId,
        data.name,
        data.description,
        data.metaTitle,
        data.metaDescription
      ).subscribe();

      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Перевод добавлен', 'plus-outline');
        this.getNewsList();
      }, 500);
      this.formAddLocale.reset();
    }
  }

  onCreate() {
    const data: [CategoryInterface] = this.formCreate.value.translatable;

    if (this.formCreate.valid) {
      this.onCreateSubscription = this.categoriesService.createCategory().subscribe(
        (dataId) => {
          const id = dataId.createCategory.id;
          data.forEach(props => {
            this.categoriesService.createCategoryLocale(
              id,
              props.localeId,
              props.name,
              props.description,
              props.metaTitle,
              props.metaDescription
            ).subscribe();
        });
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Категория создана', 'plus-outline');
        this.getNewsList();
      }, 500);
      console.log('form', data);
      this.formAddLocale.reset();
    }
  }

  getNewsId(id: string) {
    this.showUpdate = true;
    this.ItemIdChanged.next(id);
  }

  onShowAddLocale() {
    this.showAddLocale = true;
  }

  onShowUpdate() {
    this.showUpdate = !this.showUpdate;
  }

  getNewsList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.categoryListQuery = this.categoriesService.getCategoryList(locale);
    });
  }

  onSearchTerm(searchTerm: string) {
    if (searchTerm) {
      this.searchTermChanged.next(`%${searchTerm}%`);
    }
    if (searchTerm === '' && searchTerm.length <= 0) {
      this.getNewsList();
    }
  }

  showToast(text: string, icon: string) {
    this.toastrService.show(status, text, {status: 'success', icon, iconPack: 'eva' });
  }

  closeUpdateModale() {
    this.showUpdate = false;
  }

  onRemoveNews(id: string) {
    this.categoriesService.deleteCategory(id).subscribe();
    setTimeout(() => {
      this.getNewsList();
      this.showToast('Удалено', 'trash-2-outline');
    }, 500);
  }

  ngOnDestroy() {
    if (this.onCreateSubscription) {
      this.onCreateSubscription.unsubscribe();
    }
    if (this.localesSubscription) {
      this.localesSubscription.unsubscribe();
    }
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
    if (this.localeChangedSubscription) {
      this.localeChangedSubscription.unsubscribe();
    }
    if (this.searchTermChangedSubscription) {
      this.searchTermChangedSubscription.unsubscribe();
    }
  }
}
