export const SELECT_REGEX_CHAR = "SELECT_REGEX_CHAR"

export const selectRegex = regexObj => dispatch => {
    dispatch({
        type: SELECT_REGEX_CHAR,
        payload: regexObj
    })
}

export const DRAG_START = "DRAG_START"
export const dragStart = id => {
    return {
        type: DRAG_START,
        payload: id
    }
}

export const DRAG_END = "DRAG_END"
export const dragEnd = () => {
    return {
        type: DRAG_START
    }
}
