export const SET_REGEXES = "SET_REGEXES"

export const setRegexes = rows => dispatch => {
    dispatch({
        type: SET_REGEXES,
        payload: rows
    })
}
