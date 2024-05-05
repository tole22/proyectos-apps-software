import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModelServer, ServerResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  // This is to fetch all products from the backend server
  getAllProducts(numberOfResoults = 10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.SERVER_URL+'/products', {
      params: {
        limit: numberOfResoults.toString()
      }
    });
  }

  // GET SINGLE PRODUCT FROM SERVER
  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

  // GET PRODUCTS FROM INE CATEGORY
  getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
  } 
}
