import React from 'react';
import {connect} from 'react-redux';
import data from '../data';
import * as actions from '../../actions/actions';


const cart = (props) => {
  let checkoutprice = 0;
  props.cart.forEach(function(order){
    checkoutprice += (order.quantity+1)*data.burgers[order.code].price;
  })
  props.customcart.forEach(function(order){
    checkoutprice += order.quantity*order.price;
  })

  return (
    <div>
      <div>CART</div>

    {props.cart.map(function(order){
      return(<div key={order.code}>({order.quantity+1})  {data.burgers[order.code].name} - {data.burgers[order.code].ingredients} </div>);
    })}

    {props.customcart.map(function(order){
      return(<div key={order.description}>({order.quantity})  Custom - {order.description} </div>);
    })}

    <div>{checkoutprice}</div>


    </div>
  );
}

const mapstate = state => {
  return {
    cart : state.store.cart,
    customcart : state.store.customcart,
    token : state.auth.token
  }
}

export default connect(mapstate,actions)(cart);
