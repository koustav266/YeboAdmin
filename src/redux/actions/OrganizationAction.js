import { ActionTypes } from "../constans/action-types"
import { getMasterOrganisation } from "../../Services/ApiServices/getMasterOrganisationService";

export const fetchOrganizations = () => async (dispatch) => {
    const response = await getMasterOrganisation();
    dispatch({type: ActionTypes.FETCH_ORGANIZATION, payload: response})
    
}

export const setOrganization = (organizations) => {
    return {
        type: ActionTypes.SET_ORGANIZATION,
        payload: organizations
    }
}