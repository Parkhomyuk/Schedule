import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICurrentDateSate } from 'src/app/store/models/currentDateState.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private store: Store<ICurrentDateSate>) { }

  ngOnInit(): void {
    console.log('store', this.store)
  }

}
