import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from '../serviceWorker';
import { createStore } from 'redux';
import AppReducer from './AppReducer';

const store = createStore(AppReducer);

const fnRender = () => {
    ReactDOM.render(
    <App 
        msg={ store.getState() }
        sayHello={() => store.dispatch({ type: 'SAY_HELLO' })} >
    </App>, 
    document.getElementById('root')
)} 

fnRender();
store.subscribe(fnRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
