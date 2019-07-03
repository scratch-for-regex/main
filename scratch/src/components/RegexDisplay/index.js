import React, { useState } from "react"
import { useSelector } from "react-redux"
import DisplayCard from "./DisplayCard"
import ErrorCard from "./ErrorCard"
import "./index.scss"
import { Dropzone } from "../shared"
import { formatRegex, selectedChars } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)
    const arrayRegex = useSelector(selectedChars)
    const [error, setError] = useState(null)
    const [purpose, setPurpose] = useState(" ")

    return (
        <div className="top-section">
            <div className="display-container">
                <div className="error-container">
                    <ErrorCard error={error} />
                </div>
                <h1>Drag N Drop</h1>
                <h3>Drag over some characters from the left.</h3>
                <Dropzone>
                    <div className="display-card-container">
                        {" "}
                        <span>/</span>
                        {arrayRegex.map(regexPiece => (
                            <DisplayCard
                                key={regexPiece.id}
                                regexInfo={regexPiece}
                                setError={setError}
                                setPurpose={setPurpose}
                            />
                        ))}
                        <span>/g</span>
                    </div>
                </Dropzone>
                <div className="regex-n-tooltips">
                    <p>{formattedRegex}</p>
                    <p className="tooltip">{purpose}</p>
                </div>
            </div>
        </div>
    )
}

export default RegexDisplay
