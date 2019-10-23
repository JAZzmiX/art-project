import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const paths = {
  categories: 'categories',
  works: 'works',
  products: 'products',
  artists: 'artists',
  sliders: 'sliders',
  customFiles: 'custom-files',
  exhibitions: 'exhibitions'
 };

@Pipe({
  name: 'imagePathReplacer'
})
export class ImagePathReplacerPipe implements PipeTransform {
  /**
   * @param path array
   * @param dir list dir: categories, works, products, artists, sliders, custom-files, exhibitions
   */
  transform(path: string, dir: string): string {
    if (/^old/.test(path)) {
      return `${environment.APIEndpoint}/uploads/${path}`;
     }
     return `${environment.APIEndpoint}/uploads/${paths[dir]}/${path}`;
  }
}
