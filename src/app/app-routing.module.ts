import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'calendar'},
  {path:'calendar', loadChildren: ()=>import('./calendar/calendar.module').then(m=>m.CalendarModule)},
  {path:'schedule', loadChildren: ()=>import('./schedule/schedule.module').then(m=>m.ScheduleModule)},
  {path:'', pathMatch:'full', redirectTo:'calendar'},
  {path:'**' , redirectTo:'calendar/week'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
