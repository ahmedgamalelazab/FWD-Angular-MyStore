import { ShoppingCartService } from './../../shopping-cart.service';
import { Router } from '@angular/router';
import { CheckOut } from './../../types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCheckoutService } from '../../shopping-check-out.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  checkout: CheckOut;
  constructor(
    private checkoutService: ShoppingCheckoutService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
    this.checkout = checkoutService.getCheckout();
  }

  ngOnInit(): void {
    this.checkoutService.notifyCheckOutDataInValid();
  }
  onSubmit(form: NgForm) {
    //code to to on submit
    if (form.valid) {
      this.checkoutService.notifyCheckOutDataIsValid();
      this.checkoutService.setCheckout(this.checkout);
      form.reset();
      this.shoppingCartService.clear();
      this.router.navigate(['/order']);
    } else {
      this.checkoutService.notifyCheckOutDataInValid();
    }
  }
}
