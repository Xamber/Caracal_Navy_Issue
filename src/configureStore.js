import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import {counterReducer} from './counter/reducer'

let rootReducer = combineReducers( {counter: counterReducer,} );

const middlewares = applyMiddleware(thunkMiddleware, createLogger());

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        middlewares
    )
}