import { Injectable } from '@angular/core';
import * as moment from 'moment'

import { DaysOfMonth } from 'src/app/sidepanel/panel/navigator/models/dayOfMonth.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }

  public convertPeriodToMoment(period: DaysOfMonth){
    console.log('move to period2', moment(`${period.dayOfMonth}-${period.currentMonth+1}-${period.currentYear}`, 'DD-MM-YYYY').format('DD-MM-YYYY'));
    return moment(`${period.dayOfMonth}-${period.currentMonth+1}-${period.currentYear}`, 'DD-MM-YYYY')
  }
}
