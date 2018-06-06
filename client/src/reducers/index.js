import {combineReducers} from 'redux';
import authreducer from './authreducer'
import burgerreducer from './burgerreducer'

export default combineReducers ({
  auth : authreducer,
  burger : burgerreducer
});
