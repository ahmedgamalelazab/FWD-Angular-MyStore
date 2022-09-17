import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [CartListComponent, CheckOutComponent, CartItemComponent],
  imports: [
    FormsModule,
    ToastModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: CartListComponent }]),
  ],
  exports: [FormsModule],
  providers:[MessageService]
})
export class ShoppingCartModule {}
