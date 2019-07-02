import { SELECT_REGEX_CHAR } from "../actions"

import { characterClasses } from "../data"

const initialState = {
    characters: characterClasses,
    selectedCharacters: [
        {
            regex: /\w/,
            purpose: "Select word",
            acceptsInputs: false
        },
        {
            regex: /\s/,
            purpose: "Select whitespace",
            acceptsInputs: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_REGEX_CHAR:
            return {
                ...state,
                regexChars: [...state.selectedCharacters, action.payload]
            }
        default:
            return state
    }
}
