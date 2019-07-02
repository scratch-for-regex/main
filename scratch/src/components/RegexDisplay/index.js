import React from "react"
import { useSelector } from "react-redux"

import { formatRegex } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)

    return (
        <div>
            <h3>Regex Display</h3>
            {formattedRegex}
        </div>
    )
}

export default RegexDisplay
