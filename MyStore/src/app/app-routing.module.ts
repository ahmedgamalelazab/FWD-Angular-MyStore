import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ),
      },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
