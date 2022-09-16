import { OrderActiveGuard } from './order.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheerUserComponent } from './components/cheer-user/cheer-user.component';

@NgModule({
  declarations: [CheerUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'order',
        component: CheerUserComponent,
        canActivate: [OrderActiveGuard],
      },
    ]),
  ],
})
export class OrderModule {}
