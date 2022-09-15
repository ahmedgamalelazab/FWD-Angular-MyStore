import { Product } from './../product/types';
import { CheckOut } from './types';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService extends BehaviorSubject<boolean> {
  customerCheckOut?: CheckOut;
  products: Product[];
  constructor() {
    super(true);
    this.products = [];
  }

  getProducts(): Product[] {
    return this.products;
  }
  addProduct(product: Product) {
    if (this.findProductById(product._id)) {
      //remove the product in case we found it
      this.removeProduct(product._id);
      //update the cart
      this.products.push(product);
    } else {
      this.products?.push(product);
    }
    this.next(false);
  }
  removeProduct(productId: string) {
    this.products = this.products?.filter((p) => p._id !== productId);
    if (this.products.length === 0) {
      this.next(true);
    }
  }

  findProductById(id: string): boolean {
    const foundProduct = this.products.filter((p) => p._id === id);
    if (foundProduct[0]) {
      return true;
    } else {
      return false;
    }
  }
}
