import { object } from "prop-types";

const USER_INIT = 'USER_INIT';

export function userInit(user = {}){

return {
    type : USER_INIT,
    payload :user
}

}
export default function useReducer(state = {},action){

    switch (action.type) {
        case USER_INIT:
            
           return Object.assign ({},action.payload)         //assign iki tane objeyi birlestiyor
    
        default:
            return state;
    }
}