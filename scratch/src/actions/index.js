export const SELECT_REGEX_CHAR = "SELECT_REGEX_CHAR"

export const selectRegex = regexObj => dispatch => {
    dispatch({
        type: SELECT_REGEX_CHAR,
        payload: regexObj
    })
}


export const REMOVE_REGEX_CHAR = "REMOVE_REGEX_CHAR"

export const removeChar = regexObj => dispatch => {
    dispatch({
        type: REMOVE_REGEX_CHAR,
        payload: regexObj
    })
}


export const EDIT_REGEX_CHAR = "EDIT_REGEX_CHAR"

export const editChar = regexObj => dispatch => {
    dispatch({
        type: EDIT_REGEX_CHAR,
        payload: regexObj
    })
}
