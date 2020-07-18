import {createStore,combineReducers,applyMiddleware}from "redux"
import thunk from"redux-thunk"
import userReducer from '../reducers/userReducer'
import ticketReducer from '../reducers/ticketReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        ticket:ticketReducer
       }),applyMiddleware(thunk))
    return store
}
export default configureStore