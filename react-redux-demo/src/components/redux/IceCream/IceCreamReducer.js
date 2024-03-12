import{BUY_ICECREAM} from "./IceCreamType";

const init_data={
        no_of_iceCream:20
}
export const ICE_CREAM_REDUCER=(state=init_data,action)=>
{
    switch (action.type) {
        case BUY_ICECREAM:return{
            ...state,
            no_of_iceCream:state.no_of_iceCream-1
        }
            
            
    
        default:return state
        
            
    }
}

