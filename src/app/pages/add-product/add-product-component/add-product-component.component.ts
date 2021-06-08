import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../Product-categories/models/Category';
import { CategoryService } from '../../Product-categories/services';
import { Product } from '../models/product';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../services';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css'],
})
export class AddProductComponentComponent implements OnInit {
  public product: Product = new Product();
  public categories: Category[];
  public products: Product[];
  public dataSource: MatTableDataSource<Product>;
  Natures: String[] = [
    'Alimentaire',
    'Electromenager',
    'cosmetique',
    'hygiene',
    'nettoyage',
    'divertissement',
    'textil',
    'decoration',
    'electronique',
    'cuisine',
    'autre',
  ];

  Matieres: String[] = [
    'carton',
    'papier',
    'vegetal',
    'bioplastique',
    'tissu',
    'papier_plastifie',
    'bois',
    'verre',
    'plastique',
    'metal',
    'aluminium',
    'Polystyrene',
    'plastique_type_bouteille',
    'autre',
  ];

  selectedValue: string;
  selectedid: number;
  matiere: string;

  ngOnInit(): void {
    this.getcategories();
  }

  constructor(
    private http: HttpClient,
    private categoryservice: CategoryService,
    private productservice: ProductService,
    private _snackBar: MatSnackBar
  ) {
    this.categories = [];
  }

  public getcategories(): void {
    this.categoryservice.loadCategoryTableData().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getproducts(): void {
    this.productservice.loadProductTableData().subscribe(
      (response: Product[]) => {
        this.products = response;
        this.dataSource = new MatTableDataSource(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  message: any;
  onSubmit(selectedid) {
    console.log(this.product);
    let resp = this.productservice.addProduct(selectedid, this.product);
    resp.subscribe((data) => {
      this.message = data;
      this.getproducts();
    });
  }

  durationInSeconds = 5;
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class PizzaPartyComponent {}
