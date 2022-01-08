import { ActionTypes } from "../constans/action-types"

const initialState = {
    guards: []
}

export const guardsReduser = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_GUARDS:
            if(payload)
                return {...state, guards: payload}
            return state
        case ActionTypes.ADD_GUARD:
            if(payload)
                return {...state, guards: [...state.guards, payload]}
            return state;
        case ActionTypes.EDIT_GUARD:
            if(payload){
                let agency = state.guards.map(product => {
                    if (product.idGuard === payload.idGuard) {
                        return payload
                    };
                    return product;
                });
                return {...state, guards: agency}
            }
            return state;
        case ActionTypes.DELETE_GUARD:
            if(payload){
                let agency = state.guards.map(product => {
                    if (product.idGuard === payload) {
                        return {...product, activeStatus: 1}
                    };
                    return product;
                });
                return {...state, guards: agency}
            }
            return state;
        case ActionTypes.ACTIVE_GUARD:
        if(payload){
            let agency = state.guards.map(product => {
                if (product.idGuard === payload) {
                    return {...product, activeStatus: 18}
                };
                return product;
            });
            return {...state, guards: agency}
        }
        return state;
        default: 
            return state;
    }
}