import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [CartListComponent, CheckOutComponent, CartItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'cart', component: CartListComponent }]),
  ],
})
export class ShoppingCartModule {}
