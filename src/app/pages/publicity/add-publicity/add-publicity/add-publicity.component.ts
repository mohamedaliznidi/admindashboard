import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/pages/add-product/models/product';
import { ProductService } from 'src/app/pages/add-product/services';
import { Publicity } from '../../models/publicity';
import { PublicityService } from '../../service/publicity.service';


@Component({
  selector: 'app-add-publicity',
  templateUrl: './add-publicity.component.html',
  styleUrls: ['./add-publicity.component.css']
})
export class AddPublicityComponent implements OnInit {
  public publicity : Publicity = new Publicity() ;
  selectedValue : string;
  id:number;
  public products : Product[];
  public dataSource: MatTableDataSource<Product>;
  Balises: String[] = ["Balise1","Balise2","Balise3","Balise4","balise5"
];
  constructor(private publicityservice : PublicityService,private productservice: ProductService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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

  message:any;
  onSubmit(productid){

  let resp=this.publicityservice.addPublicity(productid,this.publicity);
    resp.subscribe((data)=>{this.message=data});

  }
  durationInSeconds = 5;
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent11, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'searchforproduct',
  templateUrl: './searchforproduct.component.html',
  styleUrls: ['./searchforproduct.component.scss']
})

export class SearchforproductComponent implements OnInit {
  products : Product[];
  public dataSource: MatTableDataSource<Product>;
  public displayedColumns: string[] = ['id','name'];
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
    this.getproducts()
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
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent11 {}


