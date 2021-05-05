import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicity } from '../models/publicity';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private http : HttpClient){}
  public loadCategoryTableData(): Observable<Publicity[]> {
  

      return this.http.get<Publicity[]>(`http://localhost:8080/publicity/publicities`)

  }


}
