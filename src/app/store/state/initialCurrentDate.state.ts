import { ICurrentDateSate } from "../models/currentDateState.interface";
import * as moment from 'moment';

export const initialCurrentDateState: ICurrentDateSate={
    currentDate: {dayOfWeek:moment().day(), dayOfMonth:moment().date(), weekOfYear:moment().week(), currentYear: moment().year(), currentMonth: moment().month()}  ,
    selectedDate: {dayOfWeek:moment().day(), dayOfMonth:moment().date(), weekOfYear:moment().week(), currentYear: moment().year(), currentMonth: moment().month()},    
    iso: "eur",
    timeFormat:'12'
}