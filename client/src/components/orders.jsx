import React,{Component} from 'react';
import axios from 'axios';
import data from './data';
import {connect} from 'react-redux';

class Orders extends Component {

  state = {orders : false};

  async componentWillMount() {
    let orders = false;
    if(this.state.orders === false){
      orders = await axios.get('/api/order', {headers : {'authorization' : this.props.token}});

      this.setState({orders : orders.data});
    }

  }




  render() {

let con = <div>Loading...</div>
console.log(this.state.orders);
if(this.state.orders !== false){
  con = (<div>

          {this.state.orders.map(function(order){
            return(<div key={order._id}>
              <div>Store Order</div>
              <div>{order.cart.map(function(cartorder){
                  return (<div key={cartorder.code}>({cartorder.quantity+1}) {data.burgers[cartorder.code].name} - {data.burgers[cartorder.code].ingredients}</div>)
                })}</div>
              
              <div>Custom Order</div>
              <div>{order.customcart.map(function(cartorder){
                  return (<div key={cartorder.description}>({cartorder.quantity}) Custom - {cartorder.description}</div>);
                })}</div>

              <div>Total Price : {order.price}</div>
              <div>-------------------------</div>
            </div>);
          })}

        </div>)
}



    return (

      <div>{con}</div>
    )
  }
}

const mapstate = state => {
  return {
    token : state.auth.token
  }
}

export default connect(mapstate)(Orders);
