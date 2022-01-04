import { ActionTypes } from "../constans/action-types";
import { getMasterGuards } from "../../Services/ApiServices/guirdAPIServices"
// import { postMasterGuardAgency } from "../../Services/ApiServices/postMasterGuardAgency";
// import { editGuardAgencies } from "../../Services/ApiServices/editGuardAgencies";

export const fetchGuards = () => async (dispatch) => {
    const response = await getMasterGuards();
    dispatch({type: ActionTypes.FETCH_GUARDS, payload: response})
}

// export const addGuardAgency = (data) => async (dispatch) => {
//     const response =  await postMasterGuardAgency(data);
//     dispatch({type: ActionTypes.ADD_GUARD_AGENCIES, payload: response})
// }

// export const editGuardAgency = (data) => async (dispatch) => {
//     const response =  await editGuardAgencies(data);
//     dispatch({type: ActionTypes.EDIT_GUARD_AGENCIES, payload: response})
// }