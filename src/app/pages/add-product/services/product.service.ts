import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient){}
  public loadProductTableData(): Observable<Product[]> {
  

      return this.http.get<Product[]>(`http://localhost:8080/product/products`)

  }

  deleteProduct(id){
    const deleteEndpoint ='http://localhost:8080/product/deleteproduct/'+ id;
    return this.http.delete(deleteEndpoint)
  }

  removePromotion(id){
    const promotionendpoint ='http://localhost:8080/product/annulerpromotion/'+ id ;
    return this.http.get(promotionendpoint)
  }

  addPromotion(id,p){
    const promotionendpoint ='http://localhost:8080/product/promotion/'+ id +'/'+p ;
    return this.http.get(promotionendpoint)
    
  }
  
}
