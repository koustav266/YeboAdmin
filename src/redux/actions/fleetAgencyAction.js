import { ActionTypes } from "../constans/action-types"
import { getFleetAgency } from "../../Services/ApiServices/getFleetAgency";
import { addFleetAgency } from "../../Services/ApiServices/addFleetAgency"

export const fetchFleetAgencies = () => async (dispatch) => {
    const response = await getFleetAgency();
    dispatch({type: ActionTypes.FETCH_FLEET_AGENCIES, payload: response})
}

export const addFleetAgenciesAction = (data) => async (dispatch) => {
    const response =  await addFleetAgency(data);
    dispatch({type: ActionTypes.ADD_FLEET_AGENCIES, payload: response})
    
}

export const setOrganization = (organizations) => {
    return {
        type: ActionTypes.SET_ORGANIZATION,
        payload: organizations
    }
}