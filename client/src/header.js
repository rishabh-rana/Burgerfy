import React, {Component} from 'react';
import * as actions from './actions/actions';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class header extends Component {



  render() {



if(this.props.login.token !== "false" && this.props.login.name === "User"){
  console.log('fired')
  this.props.getuser(this.props.login.token);
}

    let content = (<ul className='navbar-nav'>
      <li className="nav-item ">
        <a className="nav-link" onClick={this.props.loginSignup}>Login With Google</a>
      </li>
    </ul>);

    if (this.props.login.token !== "false") {
      content = (<ul className='navbar-nav'>
        <li className="nav-item ">
          <a className="nav-link">{this.props.login.name}</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" onClick={this.props.logout}>Logout</a>
        </li>
      </ul>)
    }


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
  <Link className="navbar-brand" to="/">Burgerfy</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/builder">Builder</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/orders">Orders</Link>
      </li>

    </ul>
    {content}
  </div>
  </div>
</nav>



    )
  }
}

const mapstate = (state) => {
  return {
    login : state.auth
  }
}

export default connect(mapstate,actions)(header);
