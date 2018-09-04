import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';


@Pipe({
  name: 'toLocalTime',
})
export class ToLocalTimePipe implements PipeTransform {
  
  transform(value: string) {
    let gmtDateTime = moment.utc(value, "YYYY-MM-DD HH:mm:ss")
    let local = gmtDateTime.local().format('YYYY-MM-DD h:mm:ss A');
    return local;
  }
}
