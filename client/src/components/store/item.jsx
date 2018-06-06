import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import './store.css';

const item = (props) => {
  let pic = props.pic;
  if(!pic){
    pic = '/burger-top.png';
  }
  return (
    <div className='item'>
      <div>{props.name}</div>
      <img src={pic} className='itempic' alt=''/>
      <div>{props.ingredients}</div>
      <div>{props.price}</div>
      <button onClick={() => props.addtocart(props.code)} >Add to cart</button>
    </div>
  )
}


export default connect(null,actions)(item);
