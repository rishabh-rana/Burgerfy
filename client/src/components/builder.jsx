import React, {Component} from 'react';
import "./builder.css";
import "./burger.css";
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

class Builder extends Component {

componentDidMount () {
  window.addHook();
  this.props.count();
}

  render() {


    return (
      <div className='container'>
        <div className='row'>
      <div className='col-4'>
        Tray
        <ul className='trayofingred'>
  <li className="draggable Salad">Salad(10)</li>
  <li className="draggable Cheese">Cheese(20)</li>
  <li className="draggable Bacon">Bacon(50)</li>
  <li className="draggable Meat">Meat(60)</li>
  <li className="draggable Onion">Onion(10)</li>
  <li className="draggable Tomato">Tomato(10)</li>
  <li className="draggable Cutlet">Cutlet(40)</li>
  <li className="draggable Sauce">Sauce(5)</li>
  <li className="draggable Mayo">Mayo(5)</li>
  <li className="draggable Barbeque">Barbeque(10)</li>

</ul>
      </div>

      <div className='col-8'>
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>

          <ul id="sortable" className='burgerinside'>
          </ul>


        <div className='BreadBottom'></div>
        <button onClick={this.props.count}>Count</button>
        <div>salad : {this.props.info.ingredients.salad}</div>
        <div>bacon : {this.props.info.ingredients.bacon}</div>
        <div>cheese : {this.props.info.ingredients.cheese}</div>
        <div>meat : {this.props.info.ingredients.meat}</div>
        <div>Price: {this.props.info.price}</div>
      </div>
      </div>
      </div>

    )
  }
}

const mapstate = (state) => {
  return {
    info : state.burger
  }
}
export default connect(mapstate, actions)(Builder);
