import { Action, createReducer, on } from "@ngrx/store";
import { spinnerActionEnd, spinnerActionStart } from "../actions/spinner.action";

export interface ISpinnerState{
    isOn: boolean
}
export const initSpinner: ISpinnerState={
   isOn: false,
}
const _spinnerReducer= createReducer(
    initSpinner,
    on(spinnerActionStart,(state)=>({...state, isOn: true})),
    on(spinnerActionEnd, (state)=>({isOn: false}))
) 

export function spinnerReducer(state:ISpinnerState| undefined, action: Action){
    return _spinnerReducer(state, action)
}