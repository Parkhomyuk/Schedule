import { Action, createReducer, on, props } from "@ngrx/store";
import { currentDateAction, isoFalseAction, isoTrueAction, selectedDateAction, timeFormat_12_Action, timeFormat_24_Action } from "../actions/date.actions";
import { ICurrentDateSate } from "../models/currentDateState.interface";
import { initialCurrentDateState } from "../state/initialCurrentDate.state";

const _DateReducer=createReducer(
    initialCurrentDateState,
    on(currentDateAction, (state,props)=>({...state, currentDate: props.currentDate })),
    on(selectedDateAction, (state,props)=>({...state, selectedDate: props.selectedDate})),
    on(isoTrueAction, (state)=>({...state, iso: 'eur'})),
    on(isoFalseAction, (state)=>({...state, iso: 'eng'})),
    on(timeFormat_12_Action, (state)=>({...state, timeFormat: '12'})),
    on(timeFormat_24_Action, (state)=>({...state, timeFormat: '24'})),
)

export function dateReducer(state:  ICurrentDateSate | undefined, action: Action){
    return _DateReducer(state, action)
}