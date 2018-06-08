import React, {Component} from 'react';
import Item from './item.jsx';
import data from '../data';

class Store extends Component {
  render() {

    return(

      <div>


      {data.burgers.map(function(burger){
        return <Item key={burger.code} price={burger.price} pic={burger.pic} name={burger.name} ingredients={burger.ingredients} code={burger.code}/>
      })}

      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      </div>

    )
  }
}


export default Store;
