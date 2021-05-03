import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../models';
import { UsersService } from '../../services';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  public userTableData$: Observable<Users[]>;
  public users: Users[];
  constructor(private service: UsersService) {
    this.userTableData$ = this.service.loadUserTableData();
  }
  public getUsers(): void {
    this.service.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
