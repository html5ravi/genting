import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'decimal',
})
export class DecimalPipe implements PipeTransform {

  transform(value: any) {
   
    if (value) {
      let val = value.toString();

      if (!val.includes('.')) {
        return val + '.00';
      }
      else {
        let index = val.indexOf('.');
        let values = val.split('.');
        if (values[1].length == 1) {
          return values[0] + '.' + values[1] + '0';
        } else if (values[1].length == 2) {
          return val;
        } else {
        }
      }
    }
  }  
}
