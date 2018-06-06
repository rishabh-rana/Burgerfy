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

export const addtocart = (code) => {
  return async dispatch => {
    dispatch({type: 'addtocart', payload : code});
  }
}

export const rmtocart = (code) => {
  return async dispatch => {
    dispatch({type: 'rmtocart', payload : code});
  }
}

export const rmtoccart = (code) => {
  return async dispatch => {
    dispatch({type: 'rmtoccart', payload : code});
  }
}

export const addtocartcustom = (ingredients, price) => {
  return async dispatch => {
    let description = '';
    Object.keys(ingredients).forEach(function(ingred){
      if(ingredients[ingred] !== 0){
        description += ingred+' (' + ingredients[ingred] + '), ';
      }
    })

    dispatch({type: 'addtocartcustom', description : description.slice(0,-2), price : price});
  }
}


export const postorder = (cart, customcart, ttlprice, token) => {
  return async dispatch => {
    // const res = await axios({method:"POST", url: '/api/order', headers: {'authorization': token }, data : {cart:cart, customcart: customcart, price:ttlprice}});
    const res = await axios.post('/api/order', {cart:cart, customcart: customcart, price:ttlprice}, {headers : {'authorization' : token}} );
    console.log(res.data);
  }
}
