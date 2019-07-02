import { combineReducers } from 'redux';
import RegexReducer from  './regexesReducer'

const rootReducer = combineReducers({
  regexes: RegexReducer
})

export default rootReducer
