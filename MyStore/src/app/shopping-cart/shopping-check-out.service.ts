import { BehaviorSubject } from 'rxjs';
import { CheckOut } from './types';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingCheckoutService extends BehaviorSubject<boolean> {
  checkout: CheckOut;
  sentCheckout:CheckOut;
  isCheckoutValid: boolean = false;
  constructor() {
    super(false); // the form is not valid
    this.checkout = {
      fullName: '',
      address: '',
      creditCardNumber: '',
    };
    this.sentCheckout = {
      fullName: '',
      address: '',
      creditCardNumber: '',
    }
    this.subscribe((validationState) => {
      this.isCheckoutValid = validationState;
    });
  }
  checkoutIsValid() {
    return this.isCheckoutValid;
  }
  notifyCheckOutDataInValid() {
    this.next(false);
  }
  notifyCheckOutDataIsValid() {
    this.next(true);
  }
  getCheckout() {
    return this.sentCheckout;
  }
  getCheckoutForForm() {
    return this.checkout;
  }
  setCheckout(checkout: CheckOut) {
    this.sentCheckout = checkout;
  }
}
