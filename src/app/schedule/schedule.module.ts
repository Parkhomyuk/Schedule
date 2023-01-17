import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleMainComponent } from './components/schedule-main/schedule-main.component';
import { DayScheduleComponent } from './components/schedule-main/day-schedule/day-schedule.component';
import { WeekScheduleComponent } from './components/schedule-main/week-schedule/week-schedule.component';
import { MonthScheduleComponent } from './components/schedule-main/month-schedule/month-schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';



@NgModule({
  declarations: [
    ScheduleMainComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    MonthScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
