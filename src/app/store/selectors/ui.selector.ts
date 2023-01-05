import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUIState } from "../models/uiState.interface";

export const sidePanelStateSelector=createFeatureSelector<IUIState>('uiReducer');
export const currentPeriodViewSelector=createFeatureSelector<IUIState>('uiReducer');

export const sidePanelSelector=createSelector(
    sidePanelStateSelector,
    (state)=>state.sidePanel
)

export const currentPeriod=createSelector(
    currentPeriodViewSelector,
    (state)=>state.currentViewPeriod
)