import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';

class showaddress extends Component {

state = {
  res : null
}

  async componentDidMount() {
    const res= await axios.get('/api/address', {headers: {'authorization': this.props.token}});
    console.log(res.data);
    this.setState({res : res.data});
  }

  render() {
    let addresses = <div>Loading..</div>;
    if(this.state.res !== null){
      addresses = (
        <div>
          {this.state.res.map((addr) => {
            return <div key={addr._id}>

              <div>{addr.address}</div>
              <div>{addr.city}</div>
              <div>{addr.state}</div>
              <div>{addr.pincode}</div>
              <div>{addr.phone}</div>
              <button onClick={() => this.props.chooseaddress(addr)}>Choose This address</button>
              <button onClick={() => this.props.deleteaddress(addr._id)}>Delete</button>
            </div>
          })}
        </div>
      )
    }
    if (this.state.res && this.state.res.length === 0){
      addresses = <div>No addresses Stores please enter a new address</div>
    }

  return(
<div>

  <div>
    <div>Select Address</div>
    {addresses}
  </div>
    <form onSubmit={this.props.handleSubmit(this.props.cont)}>
      <Field
        name='address'
        component='input'
        className='form-control'
        />
      <Field
        name='city'
        component='input'
        className='form-control'
        />
      <Field
        name='state'
        component='input'
        className='form-control'
        />
      <Field
        name='pincode'
        component='input'
        type='number'
        className='form-control'
        />
      <Field
        name='phone'
        component='input'
        type="number"
        className='form-control'
        />
      <button onClick={this.props.back}>Back</button>
      <button type='submit'>New Address</button>

    </form>

    </div>
  )
}
}


export default reduxForm({form:'cart', destroyOnUnmount: false})(showaddress);
