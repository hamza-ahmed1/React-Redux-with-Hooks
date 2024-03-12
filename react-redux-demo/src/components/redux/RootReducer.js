    import { CakeReducer } from './Cake/CakeReducer'
    import {ICE_CREAM_REDUCER} from './IceCream/IceCreamReducer'
    import { combineReducers } from 'redux'
    const rootReducer=combineReducers({
        cake:CakeReducer,
        ice_cream:ICE_CREAM_REDUCER
    })

    export default rootReducer