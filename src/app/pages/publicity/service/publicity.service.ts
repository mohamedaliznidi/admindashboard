import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicity } from '../models/publicity';

@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private http : HttpClient){}
  public getPublicities(): Observable<Publicity[]> {
  

      return this.http.get<Publicity[]>(`http://localhost:8080/publicity/publicities`)

  }
  deletePublicity(id){
    const deleteEndpoint ='http://localhost:8080/publicity/removepublicity/'+ id;
    return this.http.delete(deleteEndpoint)
  }

  addPublicity(idproduct,data){

    const addendpoint ='http://localhost:8080/publicity/addpublicity/'+idproduct;
    return this.http.post(addendpoint,data)
  }
}
