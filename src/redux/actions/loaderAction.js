import { ActionTypes } from "../constans/action-types";

export const showLoader = () => (dispatch) => {
    dispatch({type: ActionTypes.SHOW_LOADER, payload: true})
}

export const hideLoader = () => (dispatch) => {
    dispatch({type: ActionTypes.HIDE_LOADER, payload: false})
}