import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';

import { Category } from '../models/Category';
import { CategoryService } from '../services';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit { @Input() employeeTableData: Category[];
  public displayedColumns: string[] = ['id', 'name','action'];
  private apiserverUrlji=environment.apiBaseUrlji;
  public dataSource: MatTableDataSource<Category>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


public categories : Category[];


  
constructor(private http :HttpClient , private productcategoryservice :CategoryService){
  this.categories =[];
}

ngOnInit(){

  this.getcategories();
  
}

public getcategories(): void {
  this.productcategoryservice.loadCategoryTableData().subscribe(

      (response: Category[])=> {
         this.categories=response;
         this.dataSource = new MatTableDataSource(this.categories);
         this.dataSource.paginator = this.paginator;
        
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  


  onSubmit(data){
    console.log(data);
    this.http.post(`${this.apiserverUrlji}/productcategory/addproductcategory`,data).subscribe(result=>{console.log(data);
  });
  }

deleteCategory(id){
  this.productcategoryservice.deleteCategory(id).subscribe(result=>{this.getcategories();
  });
}

}


