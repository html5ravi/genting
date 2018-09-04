import { Pipe, PipeTransform } from '@angular/core';
import { uniqBy } from 'lodash'; 


@Pipe({
  name: 'unique',
})
export class UniquePipe implements PipeTransform {
 
  transform(args:any,value: string) {

    console.log(args, "args");
    console.log(value, "value");

    if(value!== undefined && value!== null){
            return uniqBy(args,value);
        }
        return value;
  }
}


