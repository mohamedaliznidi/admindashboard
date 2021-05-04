import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models';
import jwt_decode from 'jwt-decode';
import { DToken } from '../models/d-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public tokenExpml: string =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJpYXQiOjE2MjAxNTc4MTgsImV4cCI6MTYyMDI0NDIxOH0.E0kxEZk-5tkDnnsn7I050XKxJGtDb7Lxeaooea5xo5RAHWdwL22cBUMRZHk1P9yZNfgrQ8nnyDiaQDxY50nh1w';
  public decoded: DToken = jwt_decode(this.tokenExpml);

  public login(): void {
    localStorage.setItem('token', this.tokenExpml);
    console.log(this.decoded);
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: this.decoded.sub,
      lastName: 'last',
    });
  }
}
