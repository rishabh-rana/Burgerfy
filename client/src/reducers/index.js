import {combineReducers} from 'redux';
import authreducer from './authreducer'
import storereducer from './storereducer'
import burgerreducer from './burgerreducer'

export default combineReducers ({
  auth : authreducer,
  burger : burgerreducer,
  store : storereducer
});
