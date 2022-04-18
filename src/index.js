import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
const initialState ={
    count: 0,
    maxCount: 100,
    message: 'Cannot go beyond 0 and 100'
};
function reducer(state= initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1>20?20:state.count + 1,
            message:state.count>=20?'Reached maximum':'Can be incremented further'

          };
        case 'DECREMENT':
          return {
            count: state.count - 1<0?0:state.count - 1,
            message:state.count<=0?'Reached minimum':'Can be decremented further'
          };
        default:
          return state;
      }
  }
  
  const store = createStore(reducer);
// const store = createStore();
const Counter = () => (
    <Provider store ={store}>
        <App/>
    </Provider>
);
ReactDOM.render(<Counter />, document.getElementById("root"));

