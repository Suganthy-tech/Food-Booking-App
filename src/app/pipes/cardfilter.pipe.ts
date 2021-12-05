import { Pipe, PipeTransform } from '@angular/core';
import { card } from '../model/card.modal';

@Pipe({
  name: 'cardfilter'
})
export class CardfilterPipe implements PipeTransform {

  transform(cardList: card[], searchValues: string | boolean, searchField: string) {
    if (!cardList) return [];
    if (!searchValues) return cardList;


    return this.globalSearchFilter(cardList, searchValues, searchField)
  }
  globalSearchFilter(cardList: card[], searchValue: string | boolean, searchField: string) {

    let items: card[] = [];
    items = cardList.filter(card => card[searchField] === searchValue)

    return items;
  }

}
