import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckBrowserService {
  browserChanged = new BehaviorSubject(false);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.browserChanged.next(true);
    }
  }
}
