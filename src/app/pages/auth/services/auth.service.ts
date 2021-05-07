import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  public login(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.apiServerUrl}/signin`, data);
  }

  public createAdmin(data): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/admins`, data);
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'yoooo',
      lastName: 'last',
    });
  }
}
