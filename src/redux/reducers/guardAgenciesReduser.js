import { ActionTypes } from "../constans/action-types"

const initialState = {
    guardAgencies: []
}

export const guardAgenciesReduser = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_GUARD_AGENCIES:
            return {...state, guardAgencies: payload}
        case ActionTypes.ADD_GUARD_AGENCIES:
            if(payload)
                return {...state, guardAgencies: [...state.guardAgencies, payload]}
            return state;
        case ActionTypes.EDIT_GUARD_AGENCIES:
            if(payload){
                let agency = state.guardAgencies.map(product => {
                    if (product.idGuardAgency === payload.idGuardAgency) {
                        return payload
                    };
                    return product;
                });
                return {...state, guardAgencies: agency}
            }
            return state;
        case ActionTypes.DELETE_GUARD_AGENCY:
            if(payload){
                let agency = state.guardAgencies.map(product => {
                    if (product.idGuardAgency === payload) {
                        return {...product, activeStatus: 1}
                    };
                    return product;
                });
                return {...state, guardAgencies: agency}
            }
            return state;
        case ActionTypes.ACTIVE_GUARD_AGENCY:
            if(payload){
                let agency = state.guardAgencies.map(product => {
                    if (product.idGuardAgency === payload) {
                        return {...product, activeStatus: 18}
                    };
                    return product;
                });
                return {...state, guardAgencies: agency}
            }
            return state;
        default: 
            return state;
    }
}