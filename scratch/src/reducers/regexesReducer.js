import { SET_REGEXES } from '../actions'

export default (regexes = [], action) => {
  switch (action.type) {
    case SET_REGEXES: 
      return action.payload
    default:
      return regexes
  }
}
