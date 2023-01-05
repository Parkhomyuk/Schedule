import { createAction } from "@ngrx/store";
import { ActionTypes } from "./action.types";

export const spinnerActionStart= createAction(
    ActionTypes.SPINERSTART
);
export const spinnerActionEnd=createAction(
    ActionTypes.SPINEREND
)

