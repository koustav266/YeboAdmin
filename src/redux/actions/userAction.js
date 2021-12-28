import { ActionTypes } from "../constans/action-types"
import { getUsers } from "../../Services/ApiServices/getUsers";

export const fetchUsers = () => async (dispatch) => {
    const response = await getUsers();
    dispatch({type: ActionTypes.FETCH_USERS, payload: response})
    
}