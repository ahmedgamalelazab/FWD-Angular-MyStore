import { Product } from './../../../product/types';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product?: Product;
  @Output() onRemoveEvent : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  emitProductOnRemove(product:Product){
    console.log(product);
    this.onRemoveEvent.emit(product);
  }

}
