import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverymanPageComponent } from './containers/deliveryman-page/deliveryman-page.component';
import { MapsComponent } from './components/maps/maps.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { CliamNumbComponent } from './components/cliam-numb/cliam-numb.component';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';

import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DeliverymanPageComponent,
    MapsComponent,
    JoblistComponent,
    CliamNumbComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeliverymanRoutingModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvuBuFSYHCi9sqTrHRZftW_ujRq4Wdcb8'
    }),
    ChartsModule,
  ],
  
})
export class DeliverymanModule {}
