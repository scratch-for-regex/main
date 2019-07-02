export const SELECT_REGEX_CHAR = "SELECT_REGEX_CHAR"

export const selectRegex = regexObj => dispatch => {
    dispatch({
        type: SELECT_REGEX_CHAR,
        payload: regexObj
    })
}
