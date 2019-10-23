import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import * as moment from 'moment';

import { LocaleService } from 'src/app/shared/locale.service';
import { LocalesQuery, GetArtistListQuery, GetArtistQuery } from 'src/app/generated/graphql';
import { ArtistService } from './artist.service';

interface ArtistUpdate {
  name: string;
  description: string;
  localeId: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {
  artistListQuery: Observable<GetArtistListQuery['artist']>;
  artistItemQuery: Observable<GetArtistQuery['artist']>;
  artistItem: GetArtistQuery['artist'];
  searchTermChanged = new Subject<string>();
  ItemIdChanged = new Subject<string>();
  artistId = '';
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
    private artistService: ArtistService,
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
          this.artistListQuery = this.artistService.getArtistList(locale, searchTerm);
        }
      );
    });

    this.ItemIdChanged.subscribe(
      id => {
        this.artistId = id;
        this.artistItemQuery = this.artistService.getArtist(id);
        this.itemSubscription = this.artistItemQuery.subscribe(
          Item => {
            console.log(Item);
            this.artistItem = Item;
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
    const data: [ArtistUpdate] = this.formUpdate.value.translatable;

    if (this.formUpdate.valid) {
      data.forEach(props => {
        this.artistService.updateArtistLocale(
          id,
          props.localeId,
          props.name,
          props.description,
          props.date,
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
    const data: ArtistUpdate = this.formAddLocale.value.data;

    if (this.formAddLocale.valid) {
      this.artistService.createArtistLocale(
        id,
        localId,
        data.name,
        data.description,
        data.date,
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
    const data: [ArtistUpdate] = this.formCreate.value.translatable;

    if (this.formCreate.valid) {
      this.onCreateSubscription = this.artistService.createArtistId().subscribe(
        (dataId) => {
          const id = dataId.data.createArtist.id;
          data.forEach(props => {
            this.artistService.createArtistLocale(
              id,
              props.localeId,
              props.name,
              props.description,
              props.date,
              props.metaTitle,
              props.metaDescription
            ).subscribe();
        });
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Ходожник создан', 'plus-outline');
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
      this.artistListQuery = this.artistService.getArtistList(locale);
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

  onRemoveNews(newsId: string) {
    this.artistService.deleteArtist(newsId).subscribe();
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
