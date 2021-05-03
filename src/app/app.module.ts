import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthModule } from './pages/auth/auth.module';
import { CategoryTableComponent } from './pages/Product-categories/category-table/category-table.component';
import { ModelsComponent } from './pages/Product-categories/models/models.component';
import { CategoryPageComponent } from './pages/Product-categories/category-page/category-page.component';
import { AddProductPageComponent } from './pages/add-product/add-product-page/add-product-page.component';
import { AddProductComponentComponent } from './pages/add-product/add-product-component/add-product-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
