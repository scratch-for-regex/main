import { combineReducers } from "redux"

import regexReducer from "./regexesReducer"
import regexDisplayReducer from "./regexDisplayReducer"

export default combineReducers({
    regexes: regexReducer,
    regexDisplay: regexDisplayReducer
})
