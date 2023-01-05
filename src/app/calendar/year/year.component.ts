import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  public grid!: number[];
  public currentDate!: moment.Moment;

  constructor() { }

  ngOnInit(): void {
    this.grid=this.onInitGrid(12)
  }

  onInitGrid(count: number){
    const res : number[]=[]
    for(let i=0;i<count;i++){
        res.push(i)
    }
    return res;
  }

}
