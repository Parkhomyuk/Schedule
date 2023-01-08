import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as moment from 'moment';
import { select, Store } from '@ngrx/store';
import { ICurrentDateSate } from 'src/app/store/models/currentDateState.interface';
import { selectSelectedDate } from 'src/app/store/selectors/date.selector';
import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';
import { UnsubComponent } from 'src/app/utils/components/unsub/unsub.component';
import { IUIState } from 'src/app/store/models/uiState.interface';
import { currentPeriod } from 'src/app/store/selectors/ui.selector';
import { currentViewPeriodAction } from 'src/app/store/actions/uiState.actions';
import { selectedDateAction } from 'src/app/store/actions/date.actions';
import { CommonFunctionsService } from 'src/app/utils/services/common-functions.service';

@Component({
  selector: 'app-nuv',
  templateUrl: './nuv.component.html',
  styleUrls: ['./nuv.component.scss']
})
export class NuvComponent extends UnsubComponent  implements OnInit, OnDestroy {
  public period$!: Observable<string|null>;
  public period!: string | null;
  
   
  public currentDateIcon:string='';

  private selectedDateTitle$!:Observable<DaysOfMonth>;
  public selectedDate: string='';
  public selectedStateDate!:DaysOfMonth; 
  constructor( private route: ActivatedRoute, private store: Store<ICurrentDateSate>, private store_ui: Store<IUIState>, private router: Router, private commonFunctionsService: CommonFunctionsService) { 
    super();
    this.selectedDateTitle$=this.store.pipe(select(selectSelectedDate)); 
    this.period$=this.store_ui.pipe(select(currentPeriod));    

  }
 

  ngOnInit(): void {
     
    this.currentDateIcon=`./assets/images/${Number(moment().format('D'))}.png`;
     
    const sub1=this.route.queryParamMap.subscribe((queryParams) => {
      // console.log('router', queryParams);
      // this.period=queryParams.get('period');
      // let period=queryParams.get('period')!;
        // this.store_ui.dispatch(currentViewPeriodAction({ displaed_period: period }))    
      
    });
    const sub2=this.selectedDateTitle$.subscribe(period=>{
        // this.selectedDate=`${moment().set('month',period.currentMonth).format('MMMM')} ${period.currentYear}`
        this.selectedDate=this.displayCurrentPeriodTitle(period)
        this.selectedStateDate=period;
         
    });
    const sub3= this.router.events.subscribe((event: any) => {
      console.log('event router', event)
      if (event instanceof NavigationEnd) {
                 
        let tuple='';
        
        if(event.url!='/'){
          tuple=event.url[1].toUpperCase()+event.url.slice(2,);
           
        }else{
          
          tuple=event.urlAfterRedirects[1].toUpperCase()+event.urlAfterRedirects.slice(2,);
           
        }
        
                   
        this.store_ui.dispatch(currentViewPeriodAction({ displaed_period: tuple}))
          
      }       
    }) 
    const sub4=this.period$.subscribe(state=>{
       
      this.period=state
       
    })
    this.subscriber.push(sub1);
    this.subscriber.push(sub2);
    this.subscriber.push(sub3);    
    this.subscriber.push(sub4);    
  }  
  moveToPeriod(direction: number){
    console.log('move to period', this.period);
    let current=moment();
    if(this.period==='Week'){             
      current=this.commonFunctionsService.convertPeriodToMoment(this.selectedStateDate).add(direction,'week');       
    }
    if(this.period==='Day'){
      current=this.commonFunctionsService.convertPeriodToMoment(this.selectedStateDate).add(direction,'days');  
    }
    if(this.period==='Month'){
      current=this.commonFunctionsService.convertPeriodToMoment(this.selectedStateDate).add(direction,'month');  
    }
    if(this.period==='Year'){
      current=this.commonFunctionsService.convertPeriodToMoment(this.selectedStateDate).add(direction,'year');  
    }
    const newSelectedDate:DaysOfMonth={
      dayOfWeek: current.day(),
      dayOfMonth: current.date(),
      weekOfYear: current.week(),
      currentYear: current.year(),
      currentMonth: current.month()
    }       
    console.log('newSelectedDate end', newSelectedDate)
    this.store.dispatch(selectedDateAction({ selectedDate: newSelectedDate})) 
  }
  private displayCurrentPeriodTitle(period: DaysOfMonth): string{
    let selectedPeriod=this.commonFunctionsService.convertPeriodToMoment(period);     
    if(this.period==='Week'){    
      let startWeekMonth=selectedPeriod.clone().startOf('week');
      let endWeekMonth=selectedPeriod.clone().endOf('week');
      if(startWeekMonth.month()!=endWeekMonth.month()){
        return `${startWeekMonth.format('MMMM').slice(0,3)} - ${endWeekMonth.format('MMMM').slice(0,3)}  ${period.currentYear}`
      } else{
        return `${moment().set('month',period.currentMonth).format('MMMM')} ${period.currentYear}`
      }
    }
    else{
      return `${moment().set('month',period.currentMonth).format('MMMM')} ${period.currentYear}`
    }
   
  }
 
  public onDayToday(): void{
    const newSelectedDate:DaysOfMonth={
      dayOfWeek: moment().day(),
      dayOfMonth: moment().date(),
      weekOfYear: moment().week(),
      currentYear: moment().year(),
      currentMonth: moment().month()
    }    
    this.store.dispatch(selectedDateAction({ selectedDate: newSelectedDate})) 
  }

}
