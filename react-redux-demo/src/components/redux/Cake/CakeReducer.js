import { BUY_CAKE } from "./CakeType";
const init_state={
        no_of_cake:10
}
export  const CakeReducer=(state=init_state,action)=>
{
switch (action.type) {
    case BUY_CAKE:return{
        ...state,
        no_of_cake:state.no_of_cake-action.payload
    }
        
        

    default:return state
    
        
}
}

