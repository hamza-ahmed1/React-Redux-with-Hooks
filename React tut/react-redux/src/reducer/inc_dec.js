import React from 'react'
const init_count=0;
export const inc_dec = (state=init_count,action) => {
        switch (action.type) {
            case "INCREAMENT":
                return state+1;
        case "DECREAMENT":
            return state-1;
            default:
                return state;
        }
}
