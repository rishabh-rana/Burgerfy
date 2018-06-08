import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/actions';

 const ss = (props) => {
   let content = null;
if(props.chosen === null){
  content = (
    <div>
    <div>{props.values.address}</div>
    <div>{props.values.city}</div>
    <div>{props.values.state}</div>
    <div>{props.values.pincode}</div>
    <div>{props.values.phone}</div>
      <button onClick={props.back}>back</button>
      <button onClick={() => props.postorder(props.cart, props.customcart, props.price,props.values, props.token, props.history)}>Order</button>;
    </div>
  )
} else {
  content = (
    <div>
    <div>{props.chosen.address}</div>
    <div>{props.chosen.city}</div>
    <div>{props.chosen.state}</div>
    <div>{props.chosen.pincode}</div>
    <div>{props.chosen.phone}</div>
      <button onClick={props.back}>back</button>
      <button onClick={() => props.postorder(props.cart, props.customcart, props.price,props.chosen, props.token, props.history)}>Order</button>;
    </div>
  )
}

  return (


    <div>

      {content}


    </div>
  )
}

const mapstatetoprops=(state)=>{
  return {
    values : state.form.cart.values,
    cart : state.store.cart,
    customcart : state.store.customcart,
    token : state.auth.token
  }
}
export default connect(mapstatetoprops,actions)(withRouter(ss));
