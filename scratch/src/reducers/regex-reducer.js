import { SELECT_REGEX_CHAR, DRAG_START, DRAG_END } from "../actions"

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
                regexChars: [...state.selectedCharacters, action.payload]
            }

        case DRAG_START:
            const obj = state.characters.find(obj => obj.id === action.payload)
            console.log(obj)
            return {
                ...state,
                draggingObj: obj
            }

        case DRAG_END:
            return {
                ...state,
                draggingObj: null
            }

        case "DROP_SUCCESS":
            // Only run this code if the obj doesn't already exist in the store
            if (
                state.selectedCharacters.findIndex(
                    obj => obj.id === action.payload.id
                ) === -1
            ) {
                console.log(action.payload)
                return {
                    ...state,
                    draggingObj: null,
                    selectedCharacters: [
                        ...state.selectedCharacters,
                        action.payload
                    ]
                }
            } else {
                return state
            }

        default:
            return state
    }
}
