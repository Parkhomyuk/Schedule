import * as moment from "moment";
import { DaysOfMonth } from "src/app/sidepanel/panel/navigator/models/dayOfMonth.interface";
import { DayOfWeekModel } from "src/app/sidepanel/panel/navigator/models/dayOfWeek.interface";

export class UtilsFunctions{
    public initArrayOfNavigator(numberRows:number): Array<DaysOfMonth>[] {
        const listDaysOfCurrentMonth:Array<DaysOfMonth>[]=[];
        for(let i=0;i<numberRows;i++){
          listDaysOfCurrentMonth[i]=[]
          for(let j=0;j<7;j++){
            const emptyDay: DaysOfMonth={dayOfWeek:0, dayOfMonth:0, weekOfYear:0, currentYear: 0, currentMonth: 0}
            listDaysOfCurrentMonth[i][j]=emptyDay;
          }
        }
         return listDaysOfCurrentMonth  
      }
      public headerInit(): DayOfWeekModel[]{
        let res: DayOfWeekModel[]=[]
        for(let i=0;i<moment.weekdays().length;i++){
          const day:DayOfWeekModel={
            dayName: moment.weekdays()[i],
            dayNameShort: moment.weekdays()[i].substring(0,1),
            dayNumber: i+1,
             
          }
          res.push(day)
       }    
       return res
      }
}