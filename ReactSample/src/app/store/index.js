
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import rootReducer  from '../reducers'
const history = createHistory()


const middleware = routerMiddleware(history)
const store = createStore(rootReducer,  
  applyMiddleware(middleware)
)


export { store, history }
