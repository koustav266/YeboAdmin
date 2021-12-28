import { ActionTypes } from "../constans/action-types"

const initialState = {
    organizations: []
}

export const organizationReduser = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_ORGANIZATION:
            return {...state, organizations: payload};
        case ActionTypes.FETCH_ORGANIZATION:
            return {...state, organizations: payload}
        default: 
            return state;
    }
}