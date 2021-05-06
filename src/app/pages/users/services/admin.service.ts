import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public loadAdmins(): Observable<Users[]> {
    return this.http.get<Users[]>(`http://localhost:8080/api/admins/users`);
  }
}
