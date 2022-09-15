import { ShoppingCartService } from './../../../shopping-cart/shopping-cart.service';
import { Product } from './../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.product!.quantity = 1;
  }

  onProductQuantityChangeEvent(product: Product) {
    //update the current product according the quantity change
    this.product = product;
  }

  addToCard(product: Product) {
    this.shoppingCartService.addProduct(product);
  }
}
