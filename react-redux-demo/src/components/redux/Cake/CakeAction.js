import { BUY_CAKE } from "./CakeType"
export const buyCake=(number)=>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}

