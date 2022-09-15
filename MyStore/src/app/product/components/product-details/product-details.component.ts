import { ShoppingCartService } from './../../../shopping-cart/shopping-cart.service';
import { Product } from './../../types';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((ParamObject: any) => {
      console.log(ParamObject);
      this.productService.getProductById(ParamObject.id).subscribe({
        next: (response) => {
          this.product = response.data;
          this.product.quantity = ParamObject.quantity;
          console.log(this.product);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
  addToCard(product: Product) {
    this.shoppingCartService.addProduct(product);
  }
}
