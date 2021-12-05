import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { order } from '../model/card.modal';

@Pipe({
  name: 'globalSearch'
})
export class GlobalSearchPipe implements PipeTransform {

  transform(orderList: order[], searchValue: string, searchField: string) {
    if (!orderList) return [];
    if (!searchValue) return orderList;
    searchValue = searchValue.toLowerCase();
    return this.globalSearchFilter(orderList, searchValue, searchField)
  }
  globalSearchFilter(orderList: order[], searchValue: string, searchField: string) {
    let result: order[] = [];
    orderList.forEach(order => {
      let comparingvalueType = typeof (order[searchField]) === 'string';

      if (comparingvalueType && order[searchField].toLocaleLowerCase().indexOf(searchValue) !== -1) {
        result.push(order);

      } else if (order[searchField].toString().indexOf(searchValue) !== -1) {
        result.push(order);
      }
    });
    return result;
  }

}
