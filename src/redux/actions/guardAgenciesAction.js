import { ActionTypes } from "../constans/action-types";
import { getGuardAgencies } from "../../Services/ApiServices/getGuardAgencies";
import { postMasterGuardAgency } from "../../Services/ApiServices/postMasterGuardAgency";
import { editGuardAgencies } from "../../Services/ApiServices/editGuardAgencies";
import { deleteGuardAgency, activeGuardAgency } from "../../Services/ApiServices/deleteGuardAgency"

export const fetchGuardAgencies = () => async (dispatch) => {
    const response = await getGuardAgencies();
    dispatch({type: ActionTypes.FETCH_GUARD_AGENCIES, payload: response})
}

export const addGuardAgency = (data) => async (dispatch) => {
    const response =  await postMasterGuardAgency(data);
    dispatch({type: ActionTypes.ADD_GUARD_AGENCIES, payload: response})
}

export const editGuardAgency = (data) => async (dispatch) => {
    const response =  await editGuardAgencies(data);
    dispatch({type: ActionTypes.EDIT_GUARD_AGENCIES, payload: response})
}

export const deleteGuardAgencyAction = (IdGuardAgency) => async (dispatch) => {
    const response =  await deleteGuardAgency(IdGuardAgency);
    dispatch({type: ActionTypes.DELETE_GUARD_AGENCY, payload: IdGuardAgency})
}

export const activeGuardAgencyAction = (IdGuardAgency) => async (dispatch) => {
    const response =  await activeGuardAgency(IdGuardAgency);
    dispatch({type: ActionTypes.ACTIVE_GUARD_AGENCY, payload: IdGuardAgency})
}