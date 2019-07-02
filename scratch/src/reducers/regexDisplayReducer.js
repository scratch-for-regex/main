import { SELECT_REGEX_CHAR } from "../actions"

const initialState = {
    regexChars: [/\w/, /\s/]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_REGEX_CHAR:
            return {
                ...state,
                regexChars: [...state.regexChars, action.payload]
            }
        default:
            return state
    }
}
