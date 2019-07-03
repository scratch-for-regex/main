import { SELECT_REGEX_CHAR, REMOVE_REGEX_CHAR, EDIT_REGEX_CHAR } from "../actions"

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

        case EDIT_REGEX_CHAR:
            const regexIndex = state.selectedCharacters.findIndex(regexBit => regexBit.id === action.payload.id)
            const newArray = [...state.selectedCharacters]
            newArray.splice(regexIndex, 1, action.payload)

            return {
                ...state,
                selectedCharacters: newArray
            }

        default:
            return state
    }
}
