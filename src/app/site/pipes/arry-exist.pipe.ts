import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arryExist'
})
export class ArryExistPipe implements PipeTransform {

  transform(value: []): [] {
    return (value.length > 0) ? value : null;
  }
}
