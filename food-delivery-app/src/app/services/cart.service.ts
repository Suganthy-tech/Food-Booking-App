import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as cardDetails from 'src/app/Data/card-data.modal';
import * as cardModal from 'src/app/model/card.modal';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cardList: cardModal.card[] = [];
  public cartList: cardModal.card[] = [];
  public cardListSubject: Subject<cardModal.card[]> = new Subject<cardModal.card[]>();
  public cartListSuject: Subject<cardModal.card[]> = new Subject<cardModal.card[]>();
  public orderList: cardModal.order[] = cardDetails.orderList;
  constructor() {
    this.cardList = cardDetails.cardList.map(data => { data.quantity = 0; return data });
    this.generateOrderList(30000);
  }
  addItemToCart(item: cardModal.card) {
    this.cartList.push(item);
    this.cartListSuject.next(this.cartList.slice());
  }
  updateItemToCart(card: cardModal.card, quatityUpdated: number) {
    let index = this.cartList.findIndex(cart => cart.name === card.name);
    this.cartList[index].quantity = card.quantity + quatityUpdated;
    this.cartListSuject.next(this.cartList);
  }
  deleteItemToCart(card: cardModal.card) {
    let index = this.cartList.findIndex(cart => cart.name === card.name);
    this.cartList.splice(index, 1);
    this.cartListSuject.next(this.cartList);
  }
  addItemInCard(item: cardModal.card) {
    this.cardList.push(item);
    this.cardListSubject.next(this.cardList);
  }
  updateItemInCard(card: cardModal.card, quatityUpdated: number) {
    let index = this.cardList.findIndex(cart => cart.name === card.name);
    this.cardList[index].quantity = card.quantity + quatityUpdated;
    this.cardListSubject.next(this.cardList);
  }
  updateItemInCardAndCart(card: cardModal.card, quatityUpdated: number) {
    let quan = card.quantity + quatityUpdated;
    let cardindex = this.cardList.findIndex(cart => cart.name === card.name);
    this.cardList[cardindex].quantity = quan;
    this.cardListSubject.next(this.cardList);

    let cartindex = this.cartList.findIndex(cart => cart.name === card.name);
    this.cartList[cartindex].quantity = quan;
    this.cartListSuject.next(this.cartList);
  }
  // deleteItemInCard(index: number) {
  //   this.cardList.splice(index, 1);
  //   this.cardListSubject.next(this.cardList);
  // }

  getCardList() {
    return this.cardList.slice();
  }
  getCartList() {
    return this.cartList.slice();
  }
  getOrderList() {
    return this.orderList.slice();
  }
  generateOrderList(i: number) {

    for (var x = 0; x < i; x++) {
      this.orderList.push({ customerName: 'Suganthy' + Math.random().toString().substr(16), custContactNumber: Math.floor(Math.random() * 16777215).toString(16), orderDate: new Date().toString(), currency: 'INR', expand: false, items: [], orderTime: new Date().toString(), Amount: 90 })
    }

  }

}
