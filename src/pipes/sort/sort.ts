import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  
  transform(value: any, args:string) {
    value.sort((a: any, b: any) => {
      if (a[args] < b[args]) return -1;
       else if (a[args] > b[args]) return 1;
      else return 0;
    });
    return value;
  }
}

