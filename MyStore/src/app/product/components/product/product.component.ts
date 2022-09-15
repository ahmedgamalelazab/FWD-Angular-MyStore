import { Product } from './../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  constructor() {}

  ngOnInit(): void {}

  onProductQuantityChangeEvent(product: Product) {
    //update the current product according the quantity change
    this.product = product;
  }

  addToCard(product: Product) {
    console.log(product);
  }
}
