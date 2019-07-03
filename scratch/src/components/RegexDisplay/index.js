import React from "react"
import { useSelector } from "react-redux"
import DisplayCard from "./DisplayCard"
import "./index.scss"
import { Dropzone } from "../shared"
import { formatRegex, selectedChars } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)
    const arrayRegex = useSelector(selectedChars)

    return (
        <Dropzone>
            <div className="regex-display">
                <h3>Regex Display</h3>
                <div className="display-card-container">
                    {" "}
                    <span>/</span>
                    {arrayRegex.map(regexPiece => (
                        <DisplayCard
                            key={regexPiece.id}
                            regexInfo={regexPiece}
                        />
                    ))}
                    <span>/g</span>
                </div>
                <p>{formattedRegex}</p>
            </div>
        </Dropzone>
    )
}

export default RegexDisplay
