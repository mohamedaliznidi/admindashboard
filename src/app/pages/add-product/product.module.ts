import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';



import { SharedModule } from '../../shared/shared.module';
import { EmployeeTableComponent } from '../tables/components';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { ProductService } from './services/product.service';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
AddProductPageComponent,
AddProductComponentComponent
 

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
    
    
   
  ],
  providers: [
    ProductService,
  ]
})
export class ProductModule { }
