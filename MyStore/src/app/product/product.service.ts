import { GenericResponse } from './../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './types';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<GenericResponse<[Product]>>(
      'http://localhost:3333/api/v1/products'
    );
  }

  getProductById(id: string) {
    return this.httpClient.get<GenericResponse<Product>>(
      `http://localhost:3333/api/v1/products/${id}`
    );
  }
}
