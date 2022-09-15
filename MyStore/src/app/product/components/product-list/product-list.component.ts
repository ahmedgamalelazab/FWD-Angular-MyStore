import { Product } from './../../types';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: [Product];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        if (response.statusCode === 200 && response.success === true) {
          this.products = response.data;
          console.log(this.products);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
