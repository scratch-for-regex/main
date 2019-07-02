import React from "react"
import { useSelector } from "react-redux"

import { Dropzone } from "../shared"
import { formatRegex } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)

    return (
        <div>
            <h3>Regex Display</h3>
            <Dropzone>{formattedRegex}</Dropzone>
        </div>
    )
}

export default RegexDisplay
