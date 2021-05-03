import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderPageComponent } from './container/calender-page/calender-page.component';
import { CalenderRoutingModule } from './calender-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalenderComponent } from './components/calender/calender.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [CalenderPageComponent, CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    SharedModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class CalenderrModule {}
