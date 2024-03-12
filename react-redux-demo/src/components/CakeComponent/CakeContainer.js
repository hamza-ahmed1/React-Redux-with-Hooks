import React from 'react'
import { buyCake } from '../redux/Cake/CakeAction';
import { connect } from 'react-redux'
  function CakeContainer(props) {
    console.log(props);
  return (
   <div>
     <h1>Cake SHOP</h1>
      <h2>NO OF Cakes : {props.no_of_cake}</h2>
      <br/>
      <button onClick={props.buyCake}>Buy a Cake</button>
      
   </div>
  )
}

const mapStateToProps=state=>{
    return{
        no_of_cake:state.no_of_cake
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>{
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)