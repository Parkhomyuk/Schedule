import { Component, ComponentFactoryResolver, ElementRef, HostListener, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/calendar/models/event.interface';
import { ColumnAbstractComponent } from 'src/app/calendar/utils/extends/column-abstract/column-abstract.component';
import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';
import { ICurrentDateSate } from 'src/app/store/models/currentDateState.interface';
import { selectSelectedDate } from 'src/app/store/selectors/date.selector';
import { UnsubComponent } from 'src/app/utils/components/unsub/unsub.component';
import { MarkerDirective } from 'src/app/utils/directives/marker.directive';
import { NewEventComponent } from '../../new-event/new-event.component';

@Component({
  selector: 'app-grid-columns',
  templateUrl: './grid-columns.component.html',
  styleUrls: ['./grid-columns.component.scss']
})
export class GridColumnsComponent extends ColumnAbstractComponent implements OnInit {
  @Input() public weekColumns!: moment.Moment[];
  @ViewChildren('viewContainerRef', { read: ViewContainerRef })  VCR!: QueryList<ViewContainerRef>;
  @ViewChildren(MarkerDirective, { read: ViewContainerRef }) appMarker!: QueryList<ViewContainerRef>;
  // @HostListener('mousedown',['$event'])
  // mousedown(event:any){
  //   console.log('children', event.target)
  //   let arr=this.appMarker?.toArray();
  //   console.log('arr.length', this.appMarker.length)
  //   let childComponentRef=null;
  //   for(let i=0;i<this.appMarker.length;i++){
  //     if(arr[i].element.nativeElement===event.target){
  //       console.log('this.viewContainerRef?.toArray()[3]', this.appMarker.toArray())
  //       let componentFactory=this.factory.resolveComponentFactory(NewEventComponent)
  //       childComponentRef = this.VCR.toArray()[i].createComponent<singleData>(componentFactory);
  //       childComponentRef.instance.data='green'
  //     }
     
  //   }
  //  console.log('childComponentRef', childComponentRef)
    
  // }
  public eventForDisplay: Array<IEvent[]>=[];
  public eventList: IEvent[]=[{"startDate":'2022-12-24T14:00:00',"endDate":'2022-12-24T18:00:00',"title":"new event"},{"startDate":'2022-12-21T14:00:00',"endDate":'2022-12-21T18:00:00',"title":"new event"}, {"startDate":'2022-12-20 10:00:00',"endDate":'2022-12-20 15:00:00',"title":"new event"}]
  public dayToday: moment.Moment=moment();
  public currentPeriod$!: Observable<DaysOfMonth>;
  constructor(public renderer: Renderer2, private el: ElementRef, private store_date: Store<ICurrentDateSate>, public factory: ComponentFactoryResolver) {
    super(renderer, factory, el.nativeElement);
    this.currentPeriod$=this.store_date.pipe(select(selectSelectedDate))
   }

  ngOnInit(): void {

    this.sortEventWeek();      
    this.renderer.setStyle(this.el.nativeElement.children[0].children[0], 'width',  this.el.nativeElement.parentElement.parentElement.parentElement.children[0].offsetWidth+'px');
    const sub1=this.currentPeriod$.subscribe(period=>{
        // this.dayToday=moment(`${period.dayOfMonth}-${period.currentMonth+1}-${period.currentYear}`, 'DD-MM-YYYY')
    })
    this.subscriber.push(sub1)
  }
  sortEventWeek(){
    const format = 'YYYY-MM-DDTHH:mm:ss';
    this.eventForDisplay=[]
    for(let i=0;i<this.weekColumns.length;i++){
      let start=this.weekColumns[i].startOf('day').format(format);
      let end=this.weekColumns[i].endOf('day').format(format);
      this.eventForDisplay.push([])
      for(let j=0;j<this.eventList.length;j++){
        let item=this.eventList[j].startDate;
        if(moment(item).isBetween(start, end)){
          
          this.eventForDisplay[i].push(this.eventList[j])
        }
      }
    } 
  }
  onDetectDate(period: moment.Moment){
    let currentTime=moment();
    
    if(currentTime.format('YYYY-MM-DD')===period.format('YYYY-MM-DD')){
      return true;
    }else{
      return false;
    }
  }
  onAdd(){
   
    this.eventList.push({"startDate":'2022-12-23T14:00:00',"endDate":'2022-12-23T18:00:00',"title":"Event for click"})
     
    this.sortEventWeek();
  }

}

export interface singleData{
  data: any
  
}