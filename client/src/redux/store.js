import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import { todoReducers } from './reducers/todoReducers'
import { tabreducer } from './reducers/tabReducers'


const reducer = combineReducers({
    todos: todoReducers,
    currentTab: tabreducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;