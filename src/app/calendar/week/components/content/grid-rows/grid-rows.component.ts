import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-grid-rows',
  templateUrl: './grid-rows.component.html',
  styleUrls: ['./grid-rows.component.scss']
})
export class GridRowsComponent implements OnInit {
  @Input() public timeFormat!: string;
  public rowsGrid: string[]=[];
  public columnGrid: moment.Moment[]=[];
  constructor() { }
  day_now=moment().startOf('day')
  ngOnInit(): void {
    let currentDate=moment();
    let weekStart=currentDate.clone().startOf('week');
    let weekEnd=currentDate.clone().endOf('week');
     
    for(let i=0;i<7;i++){
      this.columnGrid.push(moment(weekStart).add(i,'days'))
       
      
      
    }    
    
    for(let i=0;i<24;i++){
      if (this.timeFormat=='12'){
        this.rowsGrid.push(moment().startOf('day').add(i,'hours').format("hh A"))
      }else{
        this.rowsGrid.push(moment().startOf('day').add(i,'hours').format("HH"))
      }   
    }
  }

}
