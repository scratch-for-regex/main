import { SELECT_REGEX_CHAR, REMOVE_REGEX_CHAR } from "../actions"

import { characterClasses } from "../data"

const initialState = {
    characters: characterClasses,
    draggingObj: null,
    selectedCharacters: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_REGEX_CHAR:
            return {
                ...state,
                selectedCharacters: [
                    ...state.selectedCharacters,
                    action.payload
                ]
            }

        case REMOVE_REGEX_CHAR:
            return {
                ...state,
                selectedCharacters: state.selectedCharacters.filter(regexBit => regexBit.id !== action.payload.id)
            }

        default:
            return state
    }
}
