import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'stringtodate',
})
export class StringtodatePipe implements PipeTransform {
 
  transform(value: string) {

    console.log(value, "recieved value");
    let dateString = value;
    let dateObj = new Date(dateString);
    let momentObj = moment(dateObj);
    let momentString = momentObj.format('DD-MMM-YYYY');
    return momentString;
  }
}
