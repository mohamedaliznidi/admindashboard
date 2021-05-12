import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverymanPageComponent } from './containers/deliveryman-page/deliveryman-page.component';
import { MapsComponent } from './components/maps/maps.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { CliamNumbComponent } from './components/cliam-numb/cliam-numb.component';



@NgModule({
  declarations: [DeliverymanPageComponent, MapsComponent, JoblistComponent, CliamNumbComponent],
  imports: [
    CommonModule
  ]
})
export class DeliverymanModule { }
