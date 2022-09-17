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
  isfullNameInvalid:boolean = false;
  isaddressInvalid:boolean = false
  iscreditCardNumberInvalid:boolean = false;
  iscreditCardNumber:boolean = false;


  constructor(
    private checkoutService: ShoppingCheckoutService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
    this.checkout = checkoutService.getCheckoutForForm()!;
  }

  ngOnInit(): void {
    this.checkoutService.notifyCheckOutDataInValid();
  }
  onSubmit(form: NgForm) {
    //code to to on submit
    if (form.valid) {
      console.log(this.checkout);
      this.checkoutService.notifyCheckOutDataIsValid();
      this.checkoutService.setCheckout({...this.checkout});
      this.reset();
      // form.reset();
      this.shoppingCartService.clear();
      this.router.navigate(['/order']);
    } else {
      this.checkoutService.notifyCheckOutDataInValid();
    }
  }

  nameChanged(event:any){
    this.isfullNameInvalid = this.checkInputValidation(event.length , this.isfullNameInvalid,3);
  }

  addressChange(event:any){
    this.isaddressInvalid = this.checkInputValidation(event.length , this.isaddressInvalid,6);
  }

  creditCardEntryChange(event:any){
    this.iscreditCardNumber = this.InputIsDigit(event);
    this.iscreditCardNumberInvalid = this.checkInputValidation(event.length , this.iscreditCardNumberInvalid,16)

  }

  checkInputValidation(length:number, conditionVar:boolean , conditionParam:number){
    if(length <conditionParam || length == 0){
      return conditionVar = true;
    }else {
      return conditionVar = false;
    }
  }

  InputIsDigit(text:string){
    console.log(new RegExp('^[0-9]*$').test(text));
      if(new RegExp('^[0-9]*$').test(text)){
        return false;
      }else {
        return true;
      }
  }

  reset(){
    this.checkout.address = "";
    this.checkout.creditCardNumber = "";
    this.checkout.fullName = "";
  }
}
