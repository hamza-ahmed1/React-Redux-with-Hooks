import React from 'react'
import { buyCake } from '../redux/Cake/CakeAction';
import { connect } from 'react-redux'
import { useState } from 'react';
  function CakeContainer(props) {
   // console.log(props);
   const [number,setnumber]=useState(1);
  return (
   <div>
     <h1>Cake SHOP</h1>
      <h2>NO OF Cakes : {props.no_of_cake}</h2>
      <br/>
      <label>Enter no Of Cakes:</label>
      <input type='number' value={number} onChange={e=>setnumber(e.target.value)}/>
      <h3>you selected {number} cakes</h3>
      <button onClick={()=>props.buyCake(number)}>Buy a Cake</button>
      
   </div>
  )
}

const mapStateToProps=state=>{
    return{
        no_of_cake:state.cake.no_of_cake
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>{
            dispatch(buyCake(number))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)