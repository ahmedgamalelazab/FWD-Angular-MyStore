import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductQuantityComponent,
  ],
  imports: [
    ToastModule,
    CommonModule,
    RouterModule.forChild([
      // { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '', component: ProductListComponent },
      {
        path: ':id/product-details/:quantity',
        component: ProductDetailsComponent,
      },
    ]),
  ],
  exports:[ToastModule],
  providers:[MessageService]
})
export class ProductModule {}
