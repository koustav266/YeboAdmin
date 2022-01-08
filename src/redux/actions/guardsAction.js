import { ActionTypes } from "../constans/action-types";
import { getMasterGuards, postMasterGuard, editMasterGuard, deleteGuard, activeGuard } from "../../Services/ApiServices/guardAPIServices"

// import { editGuardAgencies } from "../../Services/ApiServices/editGuardAgencies";

export const fetchGuards = () => async (dispatch) => {
    const response = await getMasterGuards();
    dispatch({type: ActionTypes.FETCH_GUARDS, payload: response})
}

export const addGuard = (data) => async (dispatch) => {
    const response =  await postMasterGuard(data);
    dispatch({type: ActionTypes.ADD_GUARD, payload: response})
}

export const editGuardAction = (data) => async (dispatch) => {
    const response =  await editMasterGuard(data);
    dispatch({type: ActionTypes.EDIT_GUARD, payload: response})
}

export const deleteGuardAction = (idGuard) => async (dispatch) => {
    const response =  await deleteGuard(idGuard);
    dispatch({type: ActionTypes.DELETE_GUARD, payload: idGuard})
}

export const activeGuardAction = (idGuard) => async (dispatch) => {
    const response =  await activeGuard(idGuard);
    dispatch({type: ActionTypes.ACTIVE_GUARD, payload: idGuard})
}