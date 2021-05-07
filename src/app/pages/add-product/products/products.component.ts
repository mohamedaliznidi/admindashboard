import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/product';
import { ProductService } from '../services';
import {MatSort} from '@angular/material/sort';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timeStamp } from 'console';


export interface DialogData {
  name : string;
   id : number;
  nature:string;
 categoryname:string;
  image:string;
  description :string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {@Input() employeeTableData: Product[];

  public products : Product[];
  public displayedColumns: string[] = ['id','name','categoryname','quantity','price','expdate','promotion','initial_price','code','nature','matiere','action'];
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
 
  public dataSource: MatTableDataSource<Product>;


  
constructor(private http :HttpClient , private productservice :ProductService,public dialog: MatDialog){
  this.products =[];
}

names : string;
ids : number;
natures:string;
categorynames:string;
images:string;
descriptions :string;
openDialog(id,name,nature,categoryname,image,description) {
 this.ids=id;
 this.names=name;
 this.natures=nature;
 this.categorynames=categoryname;
 this.images=image;
 this.descriptions=description;

  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { data: {id: this.ids ,name: this.names,nature: this.natures,
  categoryname: this.categorynames, image: this.images, description:this.descriptions
  }});

  // Manually restore focus to the menu trigger since the element that
  // opens the dialog won't be in the DOM any more when the dialog closes.
  dialogRef.afterClosed().subscribe(() => this.menuTrigger);
}



ngOnInit(){

  this.getproducts();

  
}

public getproducts(): void {
  this.productservice.loadProductTableData().subscribe(

      (response: Product[])=> {
         this.products=response;
         this.dataSource = new MatTableDataSource(this.products);
       
        
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





}
@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
  
  styleUrls: ['./products.component.scss'],
})
export class DialogFromMenuExampleDialog {
  public promotion : number;
  constructor(private productservice :ProductService,
    public dialogRef: MatDialogRef<DialogFromMenuExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteproduct(id){
    this.productservice.deleteProduct(id).subscribe(result=>{this.productservice.loadProductTableData();
    });
  }

  removepromotion(id){
    this.productservice.removePromotion(id).subscribe(result=>{this.productservice.loadProductTableData();
    });  }
  
  
  addpromotion(id){
    this.productservice.addPromotion(id,this.promotion).subscribe(result=>{this.productservice.loadProductTableData();
    });  }
  
}