import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

import { DaysOfMonth } from './models/dayOfMonth.interface';
import { DayOfWeekModel } from './models/dayOfWeek.interface';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  public currentPeriod!: moment.Moment;
  public arrayHeaderDaysOfWeek: DayOfWeekModel[]=[]
  public arrayDaysOfCurrentMonth: Array<DaysOfMonth>[]=[]

  @Input('currentDateIn') curentDate?: DaysOfMonth;
  @Output() currentDateOut= new EventEmitter<DaysOfMonth>();

  constructor() { }

  ngOnInit(): void {
    this.currentPeriod=moment();
    this.headerInit();  
    this.initArrayOfNavigator();  
  }
  private initArrayOfNavigator(): void{
    for(let i=0;i<6;i++){
      this.arrayDaysOfCurrentMonth[i]=[]
      for(let j=0;j<this.arrayHeaderDaysOfWeek.length;j++){
        const emptyDay: DaysOfMonth={dayOfWeek:0, dayOfMonth:0, weekOfYear:0, currentYear: 0, currentMonth: 0}
        this.arrayDaysOfCurrentMonth[i][j]=emptyDay;
      }
    }
    this.fillCurrentMonthDays()    
  }
  private fillCurrentMonthDays():void{
    const countDaysOfMonth=this.currentPeriod.daysInMonth();
    const startOfMonth = this.currentPeriod.startOf('month');
    let dayCounter=1;
    let dayCounterPrevMonth=moment(`1-${this.currentPeriod.month()}-${this.currentPeriod.year()}`,'DD-MM-YYYY').daysInMonth();
    let startMontDayNumber=Number(startOfMonth.format('d'))
    for(let i=0;i<this.arrayDaysOfCurrentMonth.length;i++){
      for(let j=0;j<this.arrayDaysOfCurrentMonth[i].length;j++){
        if(i==0){
            if(j>=Number(startOfMonth.format('d'))){
              this.arrayDaysOfCurrentMonth[i][j]=this.onFillDay(this.currentPeriod,dayCounter,j);              
              dayCounter++;
            }else{       
              startMontDayNumber--;        
              this.arrayDaysOfCurrentMonth[i][j]=this.onFillDay(moment(`${dayCounterPrevMonth-startMontDayNumber}-${this.currentPeriod.month()}-${this.currentPeriod.year()}`,'DD-MM-YYYY'),dayCounterPrevMonth-startMontDayNumber,j);                             
            } 
            
        }       
        if(i==5){
          if(dayCounter>=countDaysOfMonth){
            dayCounter=1
            let month=moment(this.currentPeriod.clone().add(1,'months').format('DD-MM-YYYY'));
            this.arrayDaysOfCurrentMonth[i][j]=this.onFillDay(month,dayCounter,j);
            dayCounter++;
          }else{
            this.arrayDaysOfCurrentMonth[i][j]=this.onFillDay(this.currentPeriod,dayCounter,j);   
            dayCounter++;
          }     
        }
        if(1<=i&&i<5){
            this.arrayDaysOfCurrentMonth[i][j]=this.onFillDay(this.currentPeriod,dayCounter,j);            
            dayCounter++;
                       
        }
        
      }
    }
     
  }
  private onFillDay(currentPeriod: moment.Moment,dayOfMonth: number, dayOfWeek: number){
    return {
      "currentMonth": currentPeriod.month(),
      "currentYear" :currentPeriod.year(),
      "dayOfMonth":dayOfMonth,
      "dayOfWeek":dayOfWeek,
      "weekOfYear":moment(`${dayOfMonth}-${currentPeriod.month()+1}-${currentPeriod.year()}`,'DD-MM-YYYY').week(),

    }
  }
  public getCurrentDateOfMonth(item: any){
    return null
  }
  public getHoliday(item: any){
    return null
  }
  public getActiveMonth(item: any){
     
    if(item.currentMonth==11){
       return true 
    }else{
      return false
    }
     
  }
  public onClickDay(item: any){
    
    return null
  }
  public onPrevMonth(){
    return 1
  }
  public onToday(){
    return null
  }
  public onNextMonth(){
    return null
  }

  private headerInit(): void{
    for(let i=0;i<moment.weekdays().length;i++){
      const day:DayOfWeekModel={
        dayName: moment.weekdays()[i],
        dayNameShort: moment.weekdays()[i].substring(0,1),
        dayNumber: i+1,
         
      }
      this.arrayHeaderDaysOfWeek.push(day)
   }    
  }

}
