import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';
import { ICurrentDateSate } from 'src/app/store/models/currentDateState.interface';
import { selectSelectedDate } from 'src/app/store/selectors/date.selector';
import { UnsubComponent } from 'src/app/utils/components/unsub/unsub.component';
@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent extends UnsubComponent implements OnInit {

  public weekColumns: number[]=[1,2,3,4,5,6,7]
  private startWeek=moment().startOf('week');
  private selectedDateState$!:Observable<DaysOfMonth>;
  
  private endWeek=moment().endOf('week');
  public weekDays:any[]=[]
  public timeZone!: any;
  constructor(private el: ElementRef, private renderer: Renderer2, private storeDate: Store<ICurrentDateSate>) { 
    super();
      this.selectedDateState$=this.storeDate.pipe(select(selectSelectedDate))
  }

  ngOnInit(): void {
    this.timeZone=moment().format('Z');
     
    this.renderer.setStyle(this.el.nativeElement.children[0], 'width',this.el.nativeElement.parentElement.offsetWidth+'px' );
    const sub1=this.selectedDateState$.subscribe(date=>{
      this.startWeek=moment(`${date.dayOfMonth}-${date.currentMonth+1}-${date.currentYear}`,'DD-MM-YYYY').startOf('week');
      this.weekDays=[];
      for(let i=0;i<7;i++){
        this.weekDays.push(moment(this.startWeek).add(i,'days'))
      }
      
    })
    this.subscriber.push(sub1)
  }
  currentDay(period: moment.Moment): boolean{
    if(period.format('DD-MM-YYYY')===moment().format('DD-MM-YYYY')){
      return true
    }else{
      return false
    }
    
  }

}
