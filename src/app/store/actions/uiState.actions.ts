import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action.types";

export const openSidePanelAction=createAction(
    ActionTypes.OPEN_SIDEPANEL
);

export const closeSidePanelAction=createAction(
    ActionTypes.CLOSE_SIDEPANEL
);

export const currentViewPeriodAction=createAction(
    ActionTypes.CURRENT_PERIOD_DISPLAY,
    props<{displaed_period: string}>()
)
