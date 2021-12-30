import { ActionTypes } from "../constans/action-types";
import { getGuardAgencies } from "../../Services/ApiServices/getGuardAgencies";
import { postMasterGuardAgency } from "../../Services/ApiServices/postMasterGuardAgency";
import { editGuardAgencies } from "../../Services/ApiServices/editGuardAgencies";

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