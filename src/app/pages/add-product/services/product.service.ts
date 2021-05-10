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

  addProduct(selectedid,data){

    const addendpoint ='http://localhost:8080/product/addproduct/'+selectedid;
    return this.http.post(addendpoint,data)
  }

  public getProduct(id: number): Observable<Product> {
    const getendpoint ='http://localhost:8080/product/findproduct/'+id;
    return this.http.get<Product>(getendpoint);
  }

  updateProduct(product: Product){
    const putendpoint ='http://localhost:8080/product/modifyproduct';
    return this.http.put(putendpoint,product);
  
}
}