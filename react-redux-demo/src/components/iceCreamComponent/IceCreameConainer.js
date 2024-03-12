import React from 'react'
import { connect } from 'react-redux';
import {buy_iceCream} from '../redux/IceCream/IceCreamAction';


function IceCreameConainer(props) {
  //console.log(props);
  return (
    <>
    <h1>Wellcome To IceCream Shop</h1>
    <h2>Total IceCream {props.no_of_iceCream}</h2>
    <button onClick={props.buy_iceCream}>Buy an IceCream</button>
    </>
  )
}

const mapStateToprops=(state)=>{
  return{
    no_of_iceCream:state.ice_cream.no_of_iceCream

  }
}

const mapDispatchToProps=dispatch=>
{
  return {
    buy_iceCream:()=>{
      dispatch(buy_iceCream())
  }

  }
}

export default connect(mapStateToprops,mapDispatchToProps)(IceCreameConainer)