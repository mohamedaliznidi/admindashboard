import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Delivery } from '../../claim/models/delivery';
import { Deliveryman } from '../../claim/models/deliveryman';

@Injectable({
  providedIn: 'root'
})


  export class DeliveryService {
  
    private apiserverUrl=environment.apiBaseUrl;
constructor(private _http:HttpClient) { }

public getDelivery() : Observable<Delivery[]> {
    return this._http.get<Delivery[]>(`${this.apiserverUrl}/getliv`);
}
public iddo(delivery : Delivery):Observable<string>
{  
  return this._http.post<string>(`${this.apiserverUrl}/do`,delivery , {responseType : 'text' as 'json'});
}
public getDeliveryman() : Observable<Deliveryman[]> {
  return this._http.get<Deliveryman[]>(`${this.apiserverUrl}/cat1`);
}
}
