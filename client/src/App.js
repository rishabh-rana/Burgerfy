import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home';
import Builder from './components/builder.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
window.axios = axios;

class App extends Component {
  someMethod() {
    // Force a render without state change...
    this.forceUpdate();
}
  render() {

    return (
      <div>
      <BrowserRouter>
        <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/builder'  component={Builder} />
        <Route path='/orders'  component={() => <div>Orders</div>} />
        </div>
      </BrowserRouter>
      </div>




    );
  }
}


const mapstate = (state) => {
  return {
    login : state.auth
  }
}

export default connect(mapstate, actions)(App);
