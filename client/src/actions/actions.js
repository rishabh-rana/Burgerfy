import axios from 'axios';

export const loginSignup = () => {
  return async dispatch => {
    window.authenticate('google');
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({type:"logout"})
  }
}

export const count = () => {
  return async dispatch => {
    var ingredients = window.count();

    dispatch({type:"count", payload: ingredients})
  }
}

export const getprotected = (token) => {
  return async dispatch => {
    const res = await axios({method:"GET", url: '/auth/protected', headers: {'authorization': token }});
    console.log(res.data);
  }
}

export const getuser = (token) => {
  return async dispatch => {
    const res = await axios({method:"GET", url: '/auth/getuser', headers: {'authorization': token }});

    dispatch({type:'getuser', payload : res.data})
  }
}
