import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cake/CakeAction';

export default function HookCakeContainer() {
    const no_of_cake=useSelector(state=>state.cake.no_of_cake)
    const dispatch=useDispatch();
  return (
    <>
    <div>Cakes : {no_of_cake}</div>
    <button onClick={()=>dispatch(buyCake())}>Click</button>
    </>

  )
}
