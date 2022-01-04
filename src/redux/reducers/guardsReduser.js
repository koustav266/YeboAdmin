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
        // case ActionTypes.ADD_GUARD_AGENCIES:
        //     if(payload)
        //         return {...state, guardAgencies: [...state.guardAgencies, payload]}
        //     return state;
        // case ActionTypes.EDIT_GUARD_AGENCIES:
        //     if(payload){
        //         let agency = state.guardAgencies.map(product => {
        //             if (product.idGuardAgency === payload.idGuardAgency) {
        //                 return payload
        //             };
        //             return product;
        //         });
        //         return {...state, guardAgencies: agency}
        //     }
        //     return state;
        default: 
            return state;
    }
}