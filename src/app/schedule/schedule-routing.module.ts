import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from '@angular/router';
import { DayScheduleComponent } from "./components/schedule-main/day-schedule/day-schedule.component";
import { MonthScheduleComponent } from "./components/schedule-main/month-schedule/month-schedule.component";
import { WeekScheduleComponent } from "./components/schedule-main/week-schedule/week-schedule.component";
const routers: Routes=[
    {path:'', pathMatch:'full', redirectTo:'week'},
    {path:'week', component: WeekScheduleComponent},
    {path:'day', component: DayScheduleComponent},
    {path:'month', component: MonthScheduleComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routers)],
    exports:[
        RouterModule
    ]
})
export class ScheduleRoutingModule{}