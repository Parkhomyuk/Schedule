import { Action, createReducer, on } from "@ngrx/store";
import { closeSidePanelAction, currentViewModeAction, currentViewPeriodAction, openSidePanelAction } from "../actions/uiState.actions";
import { IUIState } from "../models/uiState.interface";
import { initialUIState } from "../state/initialUI.state";

const _uiReducer=createReducer(
    initialUIState,
    on(openSidePanelAction, (state)=>({...state, sidePanel: true })),
    on(closeSidePanelAction, (state)=>({...state, sidePanel: false})),
    on(currentViewPeriodAction, (state, props)=>({...state, currentViewPeriod: props.displaed_period})) ,
    on(currentViewModeAction, (state, props)=>({...state, currentViewMode: props.display_mode}))   
)

export function uiReducer(state: IUIState| undefined, action: Action ){
    return _uiReducer(state, action)
}

 