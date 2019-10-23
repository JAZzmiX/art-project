import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TranslationService } from 'src/app/shared/translation.service';
import { Subscription, Observable } from 'rxjs';
import { SocialListQuery, Config } from 'src/app/generated/graphql';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() navigationFooterLeft: [];
  @Input() navigationFooterRight: [];
  @Input() showSpinner: boolean;

  translation: any;
  slocialListQuery: Observable<SocialListQuery['config']>;
  slocialList: Config['socialList'];
  dateNow = Date.now();

  translationSubscription: Subscription;
  slocialListSubscription: Subscription;

  constructor(private traslationService: TranslationService,
    private dataStorageService: DataStorageService ) { }

  ngOnInit() {
    this.slocialListQuery = this.dataStorageService.getSocialList();

    this.slocialListSubscription = this.slocialListQuery.subscribe(socials => {
      socials.forEach(props => {
        (props.socialList) ? this.slocialList = props.socialList : this.slocialList = null;
      });
    });

    this.translationSubscription = this.traslationService
        .translationSubject.subscribe(data => this.translation = data );
  }

  ngOnDestroy() {
    this.slocialListSubscription.unsubscribe();
    this.translationSubscription.unsubscribe();
  }
}
