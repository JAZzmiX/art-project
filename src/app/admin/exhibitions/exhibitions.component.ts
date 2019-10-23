import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import * as moment from 'moment';

import { LocaleService } from 'src/app/shared/locale.service';
import {
  GetExhibitionItemQuery,
  GetExhibitionListQuery,
  LocalesQuery,
  GetWorkIdsQuery,
  WorksForExhibitionQuery
} from 'src/app/generated/graphql';
import { ExhibitionsService } from './exhibitions.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface ExhibitionInterface {
  title: string;
  description: string;
  pdfFile: File;
  localeId: string;
  metaTitle: string;
  metaDescription: string;
}
@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit, OnDestroy {
  exhibitionListQuery: Observable<GetExhibitionListQuery['exhibition']>;
  exhibitionQuery: Observable<GetExhibitionItemQuery['exhibition']>;
  worksIdsListQuery: Observable<GetWorkIdsQuery['work']>;
  exhibition: GetExhibitionItemQuery['exhibition'];
  workForExhibitionId: Observable<WorksForExhibitionQuery['work']>;
  workForExhibList: WorksForExhibitionQuery['work'] = [];
  searchTermChanged = new Subject<string>();
  searchWorksChanged = new Subject<string>();
  searchArtistChanged = new Subject<string>();
  pdfFiles = [];
  ItemIdChanged = new Subject<string>();
  closeResult: string;
  selectedWorkIdCreate: any  = [];
  selectedWorkIdDelete: any  = [];
  selectedWorkIdCreateName = [];
  selectedWorkIdDeleteName = [];
  id = '';
  showAddLocale = false;
  showUpdate = false;
  formUpdate: FormGroup;
  formAddLocale: FormGroup;
  formCreate: FormGroup;
  locales: Observable<LocalesQuery['locale']>;
  localesList: LocalesQuery['locale'];
  dataPick: Date;

  localeChangedSubscription: Subscription;
  searchTermChangedSubscription: Subscription;
  searchWorksChangedSubscription: Subscription;
  localesSubscription: Subscription;
  itemSubscription: Subscription;
  onCreateSubscription: Subscription;
  workForExhibListSubscription: Subscription;
  constructor(
    private localeService: LocaleService,
    private exhibitionsService: ExhibitionsService,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.locales = this.localeService.getLanguages();
    this.localesSubscription = this.locales.subscribe(
      locales => {
        this.localesList = locales;
        this.formUpdate = this.fb.group({
          id: '',
          position: 0,
          image: null,
          startDate: null,
          showInMainPage: false,
          endDate: null,
          translatable: this.fb.array(locales.map(locale => this.getFormGroupForLocale(locale)))
        });
        this.formAddLocale = this.fb.group({
          id: '',
          position: 0,
          localeId: ['', Validators.required],
          data: this.fb.group({
              title: ['',  Validators.required],
              description: '',
              date: '',
              metaTitle: '',
              metaDescription: '',
            })
        });
        this.formCreate = this.fb.group({
          startDate: null,
          endDate: null,
          showInMainPage: false,
          position: 0,
          image: null,
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
          this.exhibitionListQuery = this.exhibitionsService.getExhibitionList(locale, searchTerm);
        }
      );

      this.searchWorksChangedSubscription = this.searchWorksChanged.pipe(
        debounceTime(800),
        distinctUntilChanged()
      ).subscribe(
        searchTerm => {
          this.worksIdsListQuery = this.exhibitionsService.getWorksIds(locale, searchTerm);
        }
      );

      this.ItemIdChanged.subscribe(
        id => {
          this.id = id;
          this.workForExhibitionId = this.exhibitionsService.getWorksFromExhibitionId(id, locale);
          this.workForExhibListSubscription =  this.workForExhibitionId.subscribe(workForExhibList => {
            workForExhibList.forEach(exhibIteme => {
              this.workForExhibList.push(exhibIteme);
            });
          });

          this.exhibitionQuery = this.exhibitionsService.getExhibition(id);
          this.itemSubscription = this.exhibitionQuery.subscribe(
            (Item) => {
              console.log(Item);
              this.exhibition = Item;
            }
          );
        }
      );
    });

    this.getExhibitionList();
  }

  private getFormGroupForLocale(language) {
    return this.fb.group({
      title: ['', Validators.required],
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
    const data: [ExhibitionInterface] = this.formUpdate.value.translatable;
    const startDate = moment(this.formUpdate.value.startDate).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    const endDate = moment(this.formUpdate.value.endDate).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    const image = this.formUpdate.value.image;
    const showInMainPage = this.formUpdate.value.showInMainPage;
    console.log(this.selectedWorkIdDelete);
    this.exhibitionsService.updateExhibition(id, startDate, endDate, image, showInMainPage,
      this.selectedWorkIdCreate, this.selectedWorkIdDelete).subscribe();

    if (this.formUpdate.valid) {
      data.forEach(props => {
        this.exhibitionsService.updateExhibitionLocale(
          id,
          props.localeId,
          props.title,
          props.description,
          props.metaTitle,
          props.metaDescription).subscribe();
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Данные обновлены', 'save-outline');
        this.getExhibitionList();
      }, 500);
      this.formAddLocale.reset();
      this.selectedWorkIdCreate = [];
      this.selectedWorkIdCreateName = [];
      this.selectedWorkIdDelete = [];
      this.workForExhibList = [];
    }
  }

  onAddLocale() {
    const id: string = this.formAddLocale.value.id;
    const localId: string = this.formAddLocale.value.localeId;
    const data: ExhibitionInterface = this.formAddLocale.value.data;

    if (this.formAddLocale.valid) {
      this.exhibitionsService.createExhibitionLocale(
        id,
        localId,
        data.title,
        data.description,
        data.metaTitle,
        data.metaDescription
      ).subscribe();

      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.showToast('Перевод добавлен', 'plus-outline');
        this.getExhibitionList();
      }, 500);
      this.formAddLocale.reset();
    }
  }

  onImageChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.formCreate.patchValue({
        image: file
      });
    }
  }
  onImageChangeUpdate(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.formUpdate.patchValue({
        image: file
      });
    }
  }

  onPDFChange(event, locale) {
    if (event.target.files && event.target.files.length) {
      const [tempFile] = event.target.files;
      const pdfItem = {
       locale: locale,
       file: tempFile
      };
      this.pdfFiles.push(pdfItem);
    }
  }

  onUploadFile(id: string) {
    this.pdfFiles.forEach(files => {
      this.exhibitionsService.createFile(files.locale, files.file, id).subscribe(
        () => {
          this.showToast('пресс-релиз добавлен', 'file-text-outline');
          this.pdfFiles = [];
          this.ItemIdChanged.next(id);
        }
      );
    });
  }

  removeCreatedFile(id: number) {
    this.pdfFiles.splice(id, 1);
  }

  removeFileFromServer(fileId: string, exhibitionId: string) {
    this.exhibitionsService.deleteFile(fileId).subscribe(
      () => {
        this.ItemIdChanged.next(exhibitionId);
        this.showToast('файл удален', 'close-outline');
      }
    );
  }

  onCreate() {
    const data: [ExhibitionInterface] = this.formCreate.value.translatable;
    const pdfFiles = this.pdfFiles;
    const startDate = moment(this.formCreate.value.startDate).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    const endDate = moment(this.formCreate.value.endDate).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    const showInMainPage = this.formCreate.value.showInMainPage;
    const image = this.formCreate.value.image;
    if (this.formCreate.valid) {
      this.onCreateSubscription = this.exhibitionsService
        .createExhibition(startDate, image, showInMainPage, endDate, this.selectedWorkIdCreate).subscribe(
        (dataId) => {
          const id = dataId.createExhibition.id;
          if (pdfFiles) {
            pdfFiles.forEach(files => {
              this.exhibitionsService.createFile(files.locale, files.file, id).subscribe(
                () => {
                  this.showToast('пресс-релиз добавлен ', 'file-text-outline');
                  this.pdfFiles = [];
                }
              );
            });
          }
          data.forEach(props => {
            this.exhibitionsService.createExhibitionLocale(
              id,
              props.localeId,
              props.title,
              props.description,
              props.metaTitle,
              props.metaDescription
            ).subscribe(() => this.showToast(props.title + 'создано', 'plus-outline'));
        });
      });
      this.showAddLocale = false;
      this.showUpdate = false;
      setTimeout(() => {
        this.getExhibitionList();
      }, 500);
      this.formAddLocale.reset();
      this.selectedWorkIdCreate = [];
      this.selectedWorkIdCreateName = [];
    }
  }

  getExhibitionsId(id: string) {
    this.showUpdate = true;
    this.workForExhibList = [];
    this.ItemIdChanged.next(id);
  }

  onShowAddLocale() {
    this.showAddLocale = true;
  }

  onShowUpdate() {
    this.showUpdate = !this.showUpdate;
  }

  getExhibitionList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.exhibitionListQuery = this.exhibitionsService.getExhibitionList(locale);
    });
  }

  getWorksIdsList() {
    this.localeChangedSubscription = this.localeService.localeChanged.subscribe((locale: string) => {
      this.worksIdsListQuery = this.exhibitionsService.getWorksIds(locale);
    });
  }

  onSearchTerm(searchTerm: string) {
    if (searchTerm) {
      this.searchTermChanged.next(`%${searchTerm}%`);
    }
    if (searchTerm === '' && searchTerm.length <= 0) {
      this.getExhibitionList();
    }
  }

  onSearchWorks(searchTerm: string) {
    if (searchTerm) {
      this.searchWorksChanged.next(`%${searchTerm}%`);
    }
  }

  onSearchArtist(searchTerm: string) {
    console.log(searchTerm);
    if (searchTerm) {
      this.searchArtistChanged.next(`%${searchTerm}%`);
    }
  }

  getWokrId(id: string, title: string) {
    this.selectedWorkIdCreateName.push({
      id,
      title
    });
    this.selectedWorkIdCreate.push(id);
  }

  showToast(text: string, icon: string) {
    this.toastrService.show(status, `${text} - `, {status: 'success', icon, iconPack: 'eva' });
  }

  closeUpdateModale() {
    this.showUpdate = false;
  }

  openWorkWindow(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  onRemoveNews(id: string) {
    this.exhibitionsService.deleteExhibition(id).subscribe();
    setTimeout(() => {
      this.getExhibitionList();
      this.showToast('Удалено', 'trash-2-outline');
    }, 500);
  }

  removeWorkFromArr(item: number) {
    this.selectedWorkIdCreateName.splice(item, 1);
    this.selectedWorkIdCreate.splice(item, 1);
  }

  removeWorkFromExhibition(id: string, i: number) {
    this.selectedWorkIdDelete.push(id);
    this.workForExhibList.splice(i, 1);
  }

  ngOnDestroy() {
    if (this.workForExhibListSubscription) {
      this.workForExhibListSubscription.unsubscribe();
    }
    if (this.searchWorksChangedSubscription) {
      this.searchWorksChangedSubscription.unsubscribe();
    }
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

