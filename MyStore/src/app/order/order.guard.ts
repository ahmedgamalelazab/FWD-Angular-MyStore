import { ShoppingCheckoutService } from './../shopping-cart/shopping-check-out.service';
/**
 * @description : guarding the order untill the user validate an order
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class OrderActiveGuard implements CanActivate {
  constructor(
    private checkoutService: ShoppingCheckoutService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.checkoutService.checkoutIsValid()) {
      return true;
    } else {
      this.router.navigate(['/cart']);
      return false;
    }
  }
}
