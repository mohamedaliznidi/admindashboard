import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer, Employee } from '../../tables/models';
import { Category } from '../models/Category';


@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  constructor(private http : HttpClient){}
  public loadCategoryTableData(): Observable<Category[]> {
  

      return this.http.get<Category[]>(`http://localhost:8080/productcategory/productcategories`)

  }

  deleteCategory(id){
    const deleteEndpoint ='http://localhost:8080/productcategory/removeproductcategory/'+ id;
    return this.http.delete(deleteEndpoint)
  }

}
