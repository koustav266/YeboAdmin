import { ActionTypes } from "../constans/action-types"

const initialState = {
    users : []
}

export const usersReduser = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_USERS:
            return {...state, users: payload}
        default: 
            return state;
    }
}