import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgmCoreModule } from '@agm/core';

import {
  DashedLineChartComponent,
  HeatmapChartComponent,
  LineChartComponent,
  PieChartComponent,
} from './components';
import {
  ChartsPageComponent,
  IconsPageComponent,
  MapPageComponent,
} from './containers';
import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartsService } from './services';
import { DashboardModule } from '../dashboard/dashboard.module';
import { googleMapKey } from './consts';

@NgModule({
  declarations: [
    IconsPageComponent,
    ChartsPageComponent,
    MapPageComponent,
    LineChartComponent,
    DashedLineChartComponent,
    PieChartComponent,
    HeatmapChartComponent,
  ],
  imports: [
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    CommonModule,
    UiElementsRoutingModule,
    MatButtonModule,
    MatCardModule,
    //MatTabsModule,
    //MatIconModule,
    NgApexchartsModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapKey,
    }),
    MatToolbarModule,
    SharedModule,
    //DashboardModule,
  ],
  providers: [ChartsService],
})
export class UiElementsModule {}
