import { Component, OnInit } from '@angular/core';
import * as cardModal from 'src/app/model/card.modal';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartList: cardModal.card[] = [];
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
      this.cartList = cartList;
    });
  }
  updateCart(card: cardModal.card, quatityUpdated: number) {
    if ((card.quantity === 1 && quatityUpdated === -1) || card.quantity === 0 || card.quantity === null) {
      this.cartService.deleteItemToCart(card);
      this.cartService.updateItemInCard(JSON.parse(JSON.stringify(card)), quatityUpdated);
    } else {
      this.cartService.updateItemInCardAndCart(card, quatityUpdated);
    }
  }
  addOrder() {


  }
}
