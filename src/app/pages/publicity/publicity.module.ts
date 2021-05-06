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
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PublicitiesComponent } from './publicities/publicities/publicities.component';
import { PublicitiesPageComponent } from './publicities/publicities-page/publicities-page.component';
import { AddPublicityComponent } from './add-publicity/add-publicity/add-publicity.component';
import { AddPublicityPageComponent } from './add-publicity/add-publicity-page/add-publicity-page.component';
import { PublicityService } from './service/publicity.service';
import { PublicityRoutingModule } from './publicity-routing.module';

@NgModule({
  declarations: [
PublicitiesComponent,
PublicitiesPageComponent,
AddPublicityComponent,
AddPublicityPageComponent
 

  ],
  imports: [
    CommonModule,
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
    FormsModule,
    PublicityRoutingModule
    
    
   
  ],
  providers: [
    PublicityService
  ]
})
export class PublicityModule { }
