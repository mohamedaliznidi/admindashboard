import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Users } from '../../models';
import { AdminService } from '../../services';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'email', 'username', 'role'];

  filteredAndPagedUsers: Observable<Users[]>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: AdminService) {}
  ngAfterViewInit() {
    
    this.filteredAndPagedUsers = merge(
      this.sort.sortChange,
      this.paginator.page
    ).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.service.loadAdmins();
      }),
      map((data) => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;

        return data;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    );
    console.log(this.filteredAndPagedUsers);
  }

  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
}
