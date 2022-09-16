import { CheckOut } from './../../../shopping-cart/types';
import { ShoppingCartService } from './../../../shopping-cart/shopping-cart.service';
import { ShoppingCheckoutService } from './../../../shopping-cart/shopping-check-out.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheer-user',
  templateUrl: './cheer-user.component.html',
  styleUrls: ['./cheer-user.component.scss'],
})
export class CheerUserComponent implements OnInit {
  total: number = 0;
  checkoutResult?: CheckOut;
  constructor(
    private checkoutService: ShoppingCheckoutService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.total = this.shoppingCartService.getTotal();
    this.checkoutResult = this.checkoutService.getCheckout();
  }
}
