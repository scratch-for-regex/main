import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { dropSuccess } from "../../actions"
import { formatRegex, draggingObj } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)
    const draggingCard = useSelector(draggingObj)
    const dispatch = useDispatch()

    const dropCheck = e => {
        if (draggingCard) {
            dispatch(dropSuccess(draggingCard))
        }
    }

    const handleDraggedOver = e => e.preventDefault()

    return (
        <div onDragOver={handleDraggedOver} onDrop={dropCheck}>
            <h3>Regex Display</h3>
            {formattedRegex}
        </div>
    )
}

export default RegexDisplay
