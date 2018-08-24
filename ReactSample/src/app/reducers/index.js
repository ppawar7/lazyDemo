
import jobData from './jobData'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
    jobData,
    router: routerReducer
})

export default rootReducer 
