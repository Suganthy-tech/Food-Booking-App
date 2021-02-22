import { Component, OnInit } from '@angular/core';
import * as cardModal from 'src/app/model/card.modal';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  public cartList: cardModal.card[] = [];
  public subtotal: number = 0;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {

    this.cartList = this.cartService.getCartList();
    this.getCartList();
  }
  onlyNumberKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
    return true;
  }
  getCartList() {
    this.cartService.cartListSuject.subscribe(cartList => {
      let sub: number = 0;
      this.cartList = cartList;
      this.cartList.forEach(cart => { sub += cart.quanPrice });
      this.subtotal = sub;
    });
  }
  updateCart(card: cardModal.card, quatityUpdated: number) {
    if ((card.quantity === 1 && quatityUpdated === -1) || card.quantity === 0) {
      this.cartService.deleteItemToCart(card);
      this.cartService.updateItemInCard(JSON.parse(JSON.stringify(card)), quatityUpdated);
    } else {
      this.cartService.updateItemInCardAndCart(card, quatityUpdated);
    }
  }
  onBlur(card: cardModal.card, quatityUpdated: number) {
    if (card.quantity === null) {
      this.cartService.deleteItemToCart(card);
      this.cartService.updateItemInCard(JSON.parse(JSON.stringify(card)), quatityUpdated);
    }
  }
  addOrder() {
    let amount: number = 0;
    this.cartList.forEach(cart => {
      amount += cart.quantity * cart.price;
    })
    let order: cardModal.order = { orderTime: new Date().getTime().toString(), orderDate: new Date().getUTCDate().toString(), Amount: amount, items: this.cartList, currency: 'INR', expand: false, custContactNumber: "9078563412", customerName: 'Customer' }

    this.cartService.updateOrderList(order);
    this.clearCart();

  }
  clearCart() {
    this.cartService.resetCartAndCard();
  }

}
