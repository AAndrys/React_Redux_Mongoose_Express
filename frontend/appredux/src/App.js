import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, logout, decrementOfNumber, addMovie } from './actions/index';

function App() {
  const isLoggedValue = useSelector((state) => state.isLoggedReducer);
  const counter = useSelector(state => state.counterReducer);
  const movies = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isLoggedValue ? movies.movies.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        }) : null }
        <p
          className="App-link"
        >
          {isLoggedValue.toString()}
        </p>
        <p>{counter}</p>
        <button onClick={() => dispatch(addMovie('Nowy film'))}>add</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(decrementOfNumber(5))}>- 5</button>
        <button onClick={() => dispatch(signIn())}>SIGN_IN</button>
        {isLoggedValue ? <button onClick={() => dispatch(logout())}>LOGOUT</button> : null}
      </header>
    </div>
  );
}

export default App;
