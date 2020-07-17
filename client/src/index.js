import React from "react"
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

import App from './App';
import configureStore from './store/configurestore'
import {Provider }from 'react-redux'
import {startSetUser} from'./action/users'

const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
//prevents page reload
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
}

const jsx=(
    <Provider store={store}>
     <App />
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('root'))