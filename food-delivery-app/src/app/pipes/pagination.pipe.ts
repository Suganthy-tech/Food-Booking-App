import { Pipe, PipeTransform } from '@angular/core';
import { order } from '../model/card.modal';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: order[], page: number, rowsPerPage: number): unknown {
    return [...value.slice(rowsPerPage * (page - 1), rowsPerPage * (page))]
  }

}
