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
    /*return of([
      {name: 'Joe James', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'John Walsh', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Bob Herm', company: 'Example Inc.', city: 'Tampa', state: 'FL'},
      {name: 'James Houston', company: 'Example Inc.', city: 'Dallas', state: 'TX'},
      {name: 'Prabhakar Linwood', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Kaui Ignace', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'Esperanza Susanne', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Christian Birgitte', company: 'Example Inc.', city: 'Tampa', state: 'FL'},
      {name: 'Meral Elias', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Deep Pau', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'Sebastiana Hani', company: 'Example Inc.', city: 'Dallas', state: 'TX'},
      {name: 'Marciano Oihana', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'Brigid Ankur', company: 'Example Inc.', city: 'Dallas', state: 'TX'},
      {name: 'Anna Siranush', company: 'Example Inc.', city: 'Yonkers', state: 'NY'},
      {name: 'Avram Sylva', company: 'Example Inc.', city: 'Hartford', state: 'CT'},
      {name: 'Serafima Babatunde', company: 'Example Inc.', city: 'Tampa', state: 'FL'},
      {name: 'Gaston Festus', company: 'Example Inc.', city: 'Tampa', state: 'FL'}
    ]);
  }
  private apiserverUrl=environment.apiBaseUrl;*/



      return this.http.get<Category[]>(`http://localhost:8080/productcategory/productcategories`)

  }

  deleteCategory(id){
    const deleteEndpoint ='http://localhost:8080/productcategory/removeproductcategory/'+ id;
    return this.http.delete(deleteEndpoint)
  }

}
