import { Component, ViewChild, Input } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { Slider } from 'src/app/generated/graphql';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ViewChild('customArrows', {static: false}) customArrows: NgbCarousel;
  @Input() sliderImages: Observable<Slider[]>;
  @Input() showSpinner: boolean;

  constructor(private config: NgbCarouselConfig ) {
    this.config.showNavigationIndicators = false;
    this.config.showNavigationArrows = false;
  }
  arrowLeft() {
    this.customArrows.prev();
  }
  arrowRight() {
    this.customArrows.next();
  }


}
