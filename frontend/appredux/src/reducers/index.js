import isLoggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducer = combineReducers({ isLoggedReducer, counterReducer})

export default allReducer;