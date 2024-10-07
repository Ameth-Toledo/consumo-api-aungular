import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //con esto se hacen peticiones
import { Observable } from 'rxjs';
import { ProductsI } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService {
  private url : string = "https://fakestoreapi.com/";
  private headers = new HttpHeaders().set('Content-Type', 'application'); 

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductsI[]> {
    let urlApi = this.url + "products"
    console.log(urlApi)
    return this.http.get<any[]>(urlApi, {headers : this.headers});
  }
}
