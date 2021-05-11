import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
export interface news {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}
@Component({
  selector: 'app-support-requests',
  templateUrl: './support-requests.component.html',
  styleUrls: ['./support-requests.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SupportRequestsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public dataSource: MatTableDataSource<news>;
  public columnsToDisplay: string[] = [
    'author',
    'title',
    'country',
    'category',
  ];
  expandedElement: String[] | null;
  constructor(private http: HttpClient) {}
  public getnews(): Observable<any> {
    return this.http.get<any>(
      'https://api.mediastack.com/v1/news?access_key=f2029116c6a1d14723df9f320209f636&categories=business&%20languages=fr'
    );
  }
  ngOnInit() {
    this.getnews().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
