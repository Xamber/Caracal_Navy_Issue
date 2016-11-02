import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import news from './news/reducer'

let rootReducer = combineReducers({ news: news, });

const middlewares = applyMiddleware(thunkMiddleware, createLogger());

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        middlewares
    )
}