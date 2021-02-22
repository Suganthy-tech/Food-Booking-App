import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { card, order } from 'src/app/model/card.modal';
import { CartService } from 'src/app/services/cart.service';
interface sortColumn {
  icon: string,
  action: string,
  index: number,
  field?: string
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  sortField: sortColumn[] = [{ icon: 'fa fa-sort', action: '', index: 0, field: '' }, { icon: 'fa fa-caret-up', action: 'asc', index: 1 }, { icon: 'fa fa-caret-down', action: 'desc', index: 2 },]
  sortValue: sortColumn = { ...this.sortField[0] };
  public orderList: order[] = [];

  public searchValue: string = '';
  public searchField: string = '';
  public cuisineList: string[] = ['South Indian', 'North Indian'];
  public typeList: string[] = ["Vegeterian", "Non-Vegeterian"];
  public favoriteItemList: card[] = [];

  foodType = new FormControl();
  cuisineType = new FormControl();
  favoriteItem = new FormControl();


  page: number = 1;

  public active = 1;

  pages
  public rowsPerPage: number;


  get currentPage() {
    return this.active;
  }
  constructor(public cardService: CartService) {


  }

  ngOnInit(): void {
    this.orderList = this.cardService.getOrderList();
    this.getFavoriteItemList();
    this.rowsPerPage = 500;
    this.getPages(this.orderList.length);

  }
  getFavoriteItemList() {
    this.favoriteItemList = this.cardService.getCardList().filter(card => card.favorite);
  }

  getPages(items: number) {

    let page = items / this.rowsPerPage < 1 ? 1 : Math.ceil(this.orderList.length / this.rowsPerPage);
    this.pages = Array(page).fill(0).map((x, i) => i + 1);
  }
  trackByFn(index, item, itemLength) {

    this.getPages(itemLength);
    return index;
  }
  sortColumn(field: string) {

    if (this.sortValue.index === (this.sortField.length - 1)) {
      this.sortValue = this.sortField[0];

    }
    else {
      this.sortValue = this.sortField[this.sortValue.index + 1];
      this.sortValue.field = field;

    }

  }
}
