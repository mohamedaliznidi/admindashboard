import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { CategoryPageComponent } from './category-page/category-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CategoryRoutingModule {
}