export const SELECT_REGEX_CHAR = "SELECT_REGEX_CHAR"
export const DRAG_START = "DRAG_START"
export const DRAG_END = "DRAG_END"
export const DROP_SUCCESS = "DROP_SUCCESS"

export const selectRegex = regexObj => dispatch => {
    dispatch({
        type: SELECT_REGEX_CHAR,
        payload: regexObj
    })
}

export const dragStart = id => {
    return {
        type: DRAG_START,
        payload: id
    }
}

export const dragEnd = () => {
    return {
        type: DRAG_START
    }
}

export const dropSuccess = draggingCard => {
    return {
        type: DROP_SUCCESS,
        payload: draggingCard
    }
}
