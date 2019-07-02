export const SET_REGEXES = "SET_REGEXES"
export const SELECT_REGEX_CHAR = "SELECT_REGEX_CHAR"

export const setRegexes = rows => dispatch => {
    dispatch({
        type: SET_REGEXES,
        payload: rows
    })
}

export const selectRegex = regexObj => dispatch => {
    dispatch({
        type: SELECT_REGEX_CHAR,
        payload: regexObj
    })
}
