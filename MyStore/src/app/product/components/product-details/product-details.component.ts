import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((ObjectId: any) => {
      this.productService.getProductById(ObjectId.id).subscribe({
        next: (response) => {
          console.log(response.data);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
