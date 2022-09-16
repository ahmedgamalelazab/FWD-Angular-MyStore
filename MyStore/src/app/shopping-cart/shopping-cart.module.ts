import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartListComponent, CheckOutComponent, CartItemComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartListComponent }]),
  ],
  exports: [FormsModule],
})
export class ShoppingCartModule {}
