import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as cardDetails from 'src/app/Data/card-data.modal';
import * as cardModal from 'src/app/model/card.modal';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public cardList: cardModal.card[] = [];
  public cartListSubscription: Subscription;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cardList = this.cartService.getCardList();
    this.getCardList();
  }
  onlyNumberKey(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
    return true;
  }

  getCardList() {

    this.cartListSubscription = this.cartService.cardListSubject.subscribe(cardLists => {
      this.cardList = cardLists;
    });
  }
  onAddCart(card: cardModal.card, quatityUpdated: number, index: number) {

    this.cartService.updateItemInCard(JSON.parse(JSON.stringify(card)), quatityUpdated);
    this.cartService.addItemToCart({ ...card, quantity: 1 });

  }
  updateCart(card: cardModal.card, quatityUpdated: number, index: number) {
    if ((card.quantity === 1 && quatityUpdated === -1) || card.quantity === 0 || card.quantity === null) {
      this.cartService.deleteItemToCart(JSON.parse(JSON.stringify(card)));
      card.quantity = 0;
    } else {

      this.cartService.updateItemInCardAndCart(card, quatityUpdated);

    }
  }
  ngOnDestroy() {
    this.cartListSubscription.unsubscribe();
  }
}
