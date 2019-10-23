import { NgModule } from '@angular/core';

import { ImagePathReplacerPipe } from '../site/pipes/image-path-replacer.pipe';

@NgModule({
  declarations: [
    ImagePathReplacerPipe
  ],
  exports: [
    ImagePathReplacerPipe
  ]
})
export class SharedModule { }
