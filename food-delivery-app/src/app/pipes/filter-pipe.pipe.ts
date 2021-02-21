import { Pipe, PipeTransform } from '@angular/core';
import { card, order } from '../model/card.modal';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(orderList: order[], searchValues: string[], searchField: string) {
    if (!orderList) return [];
    if (!searchValues || searchValues.length < 1) return orderList;
    searchValues = searchValues.filter(searchValue => searchValue.toLowerCase());
    return this.globalSearchFilter(orderList, searchValues, searchField)
  }
  globalSearchFilter(orderList: order[], searchValue: string[], searchField: string) {
    let result: order[] = [];
    let item: card[] = [];
    orderList.forEach(order => {

      item = order.items.filter(item => searchValue.includes(item[searchField]));
      if (item.length > 0) {
        result.push({ ...order, items: item });
      }

    });
    return result;
  }

}