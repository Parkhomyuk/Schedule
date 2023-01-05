import { createAction, props } from "@ngrx/store";
import { DaysOfMonth } from "src/app/sidepanel/panel/navigator/models/dayOfMonth.interface";
import { ActionTypes } from "./action.types";

export const currentDateAction= createAction(
    ActionTypes.CURRENT_DATE,
    props<{currentDate: DaysOfMonth}>()
)
export const selectedDateAction= createAction(
    ActionTypes.SELECTED_DATE,
    props<{selectedDate: DaysOfMonth}>()
)

 

export const isoTrueAction= createAction(
    ActionTypes.ISO_TRUE
)
export const isoFalseAction= createAction(
    ActionTypes.ISO_FALSE
)
export const timeFormat_12_Action= createAction(
    ActionTypes.TIME_FORMAT_12,
    props<{dateFormat:string}>()
)
export const timeFormat_24_Action= createAction(
    ActionTypes.TIME_FORMAT_24,
    props<{dateFormat:string}>()
)
 