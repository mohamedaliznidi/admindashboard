import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';



const routes: Routes = [
  {
    path: '',
    component: AddProductPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
