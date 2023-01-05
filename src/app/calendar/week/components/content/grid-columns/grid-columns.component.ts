import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment';
import { IEvent } from 'src/app/calendar/models/event.interface';

@Component({
  selector: 'app-grid-columns',
  templateUrl: './grid-columns.component.html',
  styleUrls: ['./grid-columns.component.scss']
})
export class GridColumnsComponent implements OnInit {
  @Input() public weekColumns!: moment.Moment[];
  public eventForDisplay: Array<IEvent[]>=[];
  public eventList: IEvent[]=[{"startDate":'2022-12-24T14:00:00',"endDate":'2022-12-24T18:00:00',"title":"new event"},{"startDate":'2022-12-21T14:00:00',"endDate":'2022-12-21T18:00:00',"title":"new event"}, {"startDate":'2022-12-20 10:00:00',"endDate":'2022-12-20 15:00:00',"title":"new event"}]
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

    this.sortEventWeek();      
    this.renderer.setStyle(this.el.nativeElement.children[0].children[0], 'width',  this.el.nativeElement.parentElement.parentElement.parentElement.children[0].offsetWidth+'px')
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
