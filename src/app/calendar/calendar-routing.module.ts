import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DayComponent } from "./day/day.component";
import { MonthComponent } from "./month/month.component";
import { ContentComponent } from "./week/components/content/content.component";
import { YearComponent } from "./year/year.component";

export const routers: Routes=[
    {path:'', pathMatch:'full', redirectTo:'week'},
    {path:'week', component: ContentComponent},
    {path:'day', component: DayComponent},
    {path:'month', component: MonthComponent},
    {path:'year', component: YearComponent},
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule]
})
export class CalendarRoutingModule{}