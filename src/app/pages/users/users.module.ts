import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './container/admin/admin.component';
import { ManagerComponent } from './container/manager/manager.component';
import { ClientComponent } from './container/client/client.component';
import { DeliverymanComponent } from './container/deliveryman/deliveryman.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AdminComponent,
    ManagerComponent,
    ClientComponent,
    DeliverymanComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
  ],
})
export class UsersModule {}
