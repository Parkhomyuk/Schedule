import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() public timeFormat: string='12';
  public rowsGrid: string[]=[];
  public day: moment.Moment=moment();
  public timeZone!: any;
  constructor() { }

  ngOnInit(): void {
    let currentDate=moment();
    let weekStart=currentDate.clone().startOf('week');
    let weekEnd=currentDate.clone().endOf('week');
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
