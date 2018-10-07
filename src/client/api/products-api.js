import { HttpClient } from './http-client';

export class ProductsApi {
  static async getProducts() {
    const response = await HttpClient.get('/api/products');
    return response.json();
  }
}