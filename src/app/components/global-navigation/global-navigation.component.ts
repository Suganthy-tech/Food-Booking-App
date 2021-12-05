import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss']
})
export class GlobalNavigationComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartList().length
  }

}
