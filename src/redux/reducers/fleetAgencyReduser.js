import { ActionTypes } from "../constans/action-types"

const initialState = {
    fleetAgencies: []
}

export const fleetAgenciesReduser = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_FLEET_AGENCIES:
            return {...state, fleetAgencies: payload}
        case ActionTypes.ADD_FLEET_AGENCIES:
            if(payload)
                return {...state, fleetAgencies: [...state.fleetAgencies, payload]}
            return state;
        default: 
            return state;
    }
}

