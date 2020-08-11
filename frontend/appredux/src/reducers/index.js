import isLoggedReducer from './isLogged';
import counterReducer from './counter';
import moviesReducer from './movies';
import { combineReducers } from 'redux';

const allReducer = combineReducers({ isLoggedReducer, counterReducer, moviesReducer })

export default allReducer;