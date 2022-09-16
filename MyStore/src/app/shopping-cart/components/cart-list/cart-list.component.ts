import { ShoppingCheckoutService } from './../../shopping-check-out.service';
import { Product } from './../../../product/types';
import { ShoppingCartService } from './../../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  isCartEmpty: boolean = false;
  products: Product[];
  total: number = 0;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.products = [];
  }

  ngOnInit(): void {
    //tracking down the cart empty state
    this.shoppingCartService.subscribe((empty) => {
      this.isCartEmpty = empty;
      console.log(empty);
    });
    this.products = this.shoppingCartService.getProducts();
    this.products.forEach((p) => {
      this.total += p.price * p.quantity!;
      this.shoppingCartService.submitTotal(this.total);
    });
  }
}
