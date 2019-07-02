import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { formatRegex, draggingObj } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)
    const draggingCard = useSelector(draggingObj)
    const dispatch = useDispatch()

    const dropCheck = e => {
        if (draggingCard) {
            console.log(draggingCard)
            dispatch({
                type: "DROP_SUCCESS",
                payload: draggingCard
            })
        }
    }

    return (
        <div onDragOver={e => e.preventDefault()} onDrop={dropCheck}>
            <h3>Regex Display</h3>
            {formattedRegex}
        </div>
    )
}

export default RegexDisplay
