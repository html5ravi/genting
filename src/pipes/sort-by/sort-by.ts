import { Pipe, PipeTransform } from '@angular/core';

let pattern = /@"^[0-9*#+?.]+$"/;
@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: string[], args) {
 
    if (!args)
      return list;
    if (args == 'others') {
      return list.filter(data => {
        if (pattern.test(data['promotiontitle'].charAt(0)))
          return data;
      })
    } else {
      let value = args.split('-')
      return list.filter(data => {
        return data['promotiontitle'].charAt(0).toLowerCase().charCodeAt(0) >= value[0].charCodeAt(0) && data['promotiontitle'].charAt(0).toLowerCase().charCodeAt(0) <= value[1].charCodeAt(0)
      });
    }
  }
}
