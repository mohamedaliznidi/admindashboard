import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AdminComponent,
  ClientComponent,
  DeliverymanComponent,
  ManagerComponent,
} from './container';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'deliveryman',
    component: DeliverymanComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
