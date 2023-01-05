import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';
import { ICurrentDateSate } from 'src/app/store/models/currentDateState.interface';
import { selectSelectedDate } from 'src/app/store/selectors/date.selector';
import { UnsubComponent } from 'src/app/utils/components/unsub/unsub.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent extends UnsubComponent implements OnInit {
  @Input() public timeFormat: string='12';
  public rowsGrid: string[]=[];
  public day: moment.Moment=moment();
  public dayToDay: moment.Moment=moment();
  public currentPeriod$!: Observable<DaysOfMonth>;
  public timeZone!: any;
  constructor(private store_date: Store<ICurrentDateSate>) { 
    super();
    this.currentPeriod$=this.store_date.pipe(select(selectSelectedDate))
  }

  ngOnInit(): void {
   const sub1=this.currentPeriod$.subscribe(period=>{
    this.day=moment(`${period.dayOfMonth}-${period.currentMonth+1}-${period.currentYear}`, "DD-MM-YYYY")
   })
   this.subscriber.push(sub1);
    this.timeZone=moment().format('Z');    
    for(let i=0;i<24;i++){
      if (this.timeFormat=='12'){
        this.rowsGrid.push(moment().startOf('day').add(i,'hours').format("hh A"))
      }else{
        this.rowsGrid.push(moment().startOf('day').add(i,'hours').format("HH"))
      }   
    }
  }

}
