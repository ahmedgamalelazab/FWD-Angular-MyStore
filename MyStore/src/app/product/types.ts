/**
 * @description : all product module types
 */

export interface Product {
  _id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
}
