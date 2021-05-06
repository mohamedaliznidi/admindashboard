import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../models';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiServerUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {} //private http: HttpClient

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}admins/users`);
  }

  public loadUserTableData(): Observable<Users[]> {
    return of([
      {
        email: 'ufffser@tesfft.com',
        password:
          '$2a$10$PO4LGFrzii34Z4hJsmjqk.ym9aQEiXX5hEaMqo8VqsI2qAfCamitq',
        id: 3,
        updatedAt: '2021-05-03T19:23:47Z',
        active: true,
        role: 'ADMIN',
        username: 'adminn',
        number: 12345678,
        firstname: 'Sample',
        lastname: 'User',
        createdAt: '2021-05-03T19:23:47Z',
      },
      {
        email: 'user@test.com',
        password:
          '$2a$10$z/RKsAFUFWJwnFOBudIAy.f8tqVltKlgrYXFA9kh/yrw2JzQw23re',
        id: 1,
        updatedAt: '2021-05-03T19:23:11Z',
        active: true,
        role: 'ADMIN',
        username: 'SampleUserAdmin',
        number: 12345678,
        firstname: 'Sample',
        lastname: 'User',
        createdAt: '2021-05-03T19:23:11Z',
      },
    ]);
  }
}
