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
    const [regexString, setRegexString] = useState(" ")

    return (
        <div className="top-section">
            <div className="display-container">
                <div className="header">
                    <h1>Regex Explained Simply</h1>
                    <h3>
                        Drag over some regex symbols from the left.
                        <br /> As you do so, the text below will highlight any
                        matches that the regex is looking for.
                    </h3>
                    <ErrorCard
                        error={error}
                        class={error ? "regex-error on" : "regex-error"}
                    />
                </div>
                <Dropzone>
                    <div className="display-card-container">
                        {arrayRegex[0] ? (
                            arrayRegex.map(regexPiece => (
                                <DisplayCard
                                    key={regexPiece.id}
                                    regexInfo={regexPiece}
                                    setError={setError}
                                    setPurpose={setPurpose}
                                    setRegexString={setRegexString}
                                />
                            ))
                        ) : (
                            <span className="add-a-character">
                                Add a Character
                            </span>
                        )}
                    </div>
                </Dropzone>
                <div className="regex-n-tooltips">
                    <div className="tooltip">
                        <h3>{regexString}</h3>
                        <p className="tooltip">{purpose}</p>
                    </div>
                    <div className="regex">
                        <h3>Regex String:</h3>
                        <p>{formattedRegex}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegexDisplay
