import React, { Component } from 'react';

import Home from './components/home';
import Cart from './components/cart/Cart';
import Orders from './components/orders.jsx';
import Store from './components/store/store.jsx';
import Builder from './components/builder.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import {connect} from 'react-redux';
import * as actions from './actions/actions';






class App extends Component {
  someMethod() {
    // Force a render without state change...
    this.forceUpdate();
}
  render() {

    return (



      <BrowserRouter>



            <div>
              <Header />
        <Route path='/' exact component={Home} />
        <Route path='/builder'  component={Builder} />
        <Route path='/orders'  component={Orders} />
        <Route path='/store'  component={Store} />
        <Route path='/cart'  component={Cart} />
        </div>




      </BrowserRouter>






    );
  }
}


const mapstate = (state) => {
  return {
    login : state.auth
  }
}

export default connect(mapstate, actions)(App);
