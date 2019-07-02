import { SELECT_REGEX_CHAR } from "../actions"

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

        default:
            return state
    }
}
