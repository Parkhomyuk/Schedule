import { createFeatureSelector, createSelector } from "@ngrx/store";
import { currentDateAction } from "../actions/date.actions";
import { ICurrentDateSate } from "../models/currentDateState.interface";

export const currentDateSelector=createFeatureSelector<ICurrentDateSate>('dateReducer');
export const selectedDateSelector=createFeatureSelector<ICurrentDateSate>('dateReducer');
export const selectedISO = createFeatureSelector<ICurrentDateSate>('dateReducer')

export const selectCurrentDate=createSelector(
    currentDateAction,
    (state)=>state.currentDate
)

export const selectSelectedDate=createSelector(
    selectedDateSelector,
    (state)=>state.selectedDate
)

export const selectISO= createSelector(
    selectedISO,
    (state)=>state.iso
    )