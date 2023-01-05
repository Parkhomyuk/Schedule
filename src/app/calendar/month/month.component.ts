import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';
import { DayOfWeekModel } from 'src/app/sidepanel/panel/navigator/models/dayOfWeek.interface';
import { UtilsFunctions } from 'src/app/utils/components/functions.utils';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent extends UtilsFunctions implements OnInit {
  public grid!: MonthGrid[];
  public currentDate!: moment.Moment;
  public arrayDaysOfCurrentMonth: Array<DaysOfMonth>[]=[];
  public headerWeekDays!: DayOfWeekModel[];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.currentDate=moment();
    this.grid=this.onGridInint(this.currentDate)
   
    this.arrayDaysOfCurrentMonth=this.initArrayOfNavigator(5);
    this.headerWeekDays=this.headerInit()
    console.log('this.arrayDaysOfCurrentMonth', this.arrayDaysOfCurrentMonth);
  }
  private onGridInint(currentPeriod:moment.Moment){
    const newGrid=[];
    let startMonthWeek=this.currentDate.clone().startOf('month').week();
    let day=0
    for(let i=0;i<5;i++){        
      const week_c:MonthGrid={weekNumber:startMonthWeek,week:[]}
      for(let j=0;j<7;j++){
        week_c.week[j]={dayOfMonth:day, dayOfWeek: j, weekOfYear: startMonthWeek,currentMonth: this.currentDate.month(), currentYear:this.currentDate.year()}
        this.currentDate.clone().add(day,'days')
        day++;
      }
      startMonthWeek++;
      newGrid.push(week_c)
    }
    return newGrid;
  }

}

export interface MonthGrid{
  weekNumber: number,
  week: DaysOfMonth[]
}
