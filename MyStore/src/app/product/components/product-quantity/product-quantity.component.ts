import { Product } from './../../types';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit {
  @Input() product?: Product;
  @Output() onChange: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  onProductQuantityChange(e: any) {
    this.product!.quantity = +e.target.value;
    this.onChange.emit(this.product);
  }
}
