import React from "react"

import { DraggableItem } from "../shared"


const DisplayCard = props => {
    return (
        <DraggableItem>
            <span>
                {String(props.regexInfo.regex).replace(/\//g, "")}
            </span>
        </DraggableItem>
    )
}

export default DisplayCard