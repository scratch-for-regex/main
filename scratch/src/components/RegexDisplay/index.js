import React from "react"
import { useSelector } from "react-redux"
import DisplayCard from "./DisplayCard"

import { Dropzone } from "../shared"
import { formatRegex, selectedChars } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)
    const arrayRegex = useSelector(selectedChars)

    return (
        <Dropzone>
            <div>
                <h3>Regex Display</h3>
                <p className="display-card-container">
                    {" "}
                    /
                    {arrayRegex.map(regexPiece => (
                        <DisplayCard
                            key={regexPiece.id}
                            regexInfo={regexPiece}
                        />
                    ))}
                    /g
                </p>
                <p>{formattedRegex}</p>
            </div>
        </Dropzone>
    )
}

export default RegexDisplay
