import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekModule } from './week/week.module';
import { UtilsModule } from '../utils/utils.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { CalendarComponent } from './calendar/calendar.component';
 
 
 



@NgModule({
  declarations: [
    
    DayComponent,
    MonthComponent,
    YearComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    WeekModule,
    UtilsModule,
    CalendarRoutingModule 
  ],
  exports:[WeekModule, CalendarComponent]
})
export class CalendarModule { }
