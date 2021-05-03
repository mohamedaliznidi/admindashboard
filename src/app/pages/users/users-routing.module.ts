import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminPageComponent } from './containers';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
