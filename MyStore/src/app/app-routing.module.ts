import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '**', component: NotfoundComponent }]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
