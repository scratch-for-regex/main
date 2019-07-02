import { combineReducers } from "redux"

import regexReducer from "./regex-reducer"

export default combineReducers({
    regex: regexReducer
})
