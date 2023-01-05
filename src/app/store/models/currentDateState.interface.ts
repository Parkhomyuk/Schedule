import { DaysOfMonth } from "src/app/sidepanel/panel/navigator/models/dayOfMonth.interface";

export interface ICurrentDateSate {
    currentDate: DaysOfMonth;
    selectedDate: DaysOfMonth;     
    iso: string;
    timeFormat: string;    
}