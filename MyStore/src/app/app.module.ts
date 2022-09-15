import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotfoundComponent],
  imports: [BrowserModule, ProductModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
