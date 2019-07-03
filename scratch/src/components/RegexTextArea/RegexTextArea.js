import React, { useState } from "react"
import { connect } from "react-redux"

import "./RegexTextArea.scss"

import { reduceRegex } from "../../selectors"

const initialText = `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`

const TextAreaView = ({ text, onClick, regex }) => {
    // Runs our text through regex and stores:
    //   The text as a regexText value in state,
    //   and a count to show how many regex matches there were.
    const regexTester = () => {
        // if (regex.source === "(?:)") return { regexText: text, count: 0 }
        let count = 0
        const regexText = text.replace(regex, match => {
            if (match.length !== 0) {
                count++
            }
            return `<span className="highlight">${match}</span>`
        })

        // Returns an object containing the text with spans for regex highlighting, and a count for all regex matches.
        return {
            regexText,
            count
        }
    }

    // Calls the regexTester and returns the output(formatted properly)
    const createMarkup = () => {
        const regexResult = regexTester()
        return {
            text: {
                __html: regexResult.regexText.replace(/\n/g, "<br> ")
            },
            count: regexResult.count
        }
    }
    return (
        <p
            className="textarea"
            onClick={onClick}
            dangerouslySetInnerHTML={createMarkup().text}
        />
    )
}

const TextAreaForm = ({ text, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <textarea name="text" id="text" value={text} onChange={onChange} />
            <button>Done</button>
        </form>
    )
}

const TextAreaHeader = ({ matchCount }) => (
    <hgroup className="left">
        <h2>Text to Be Searched</h2>
        <h3>Feel free to add your own text</h3>
        <div className="matches">{matchCount || "No "} Matches</div>
    </hgroup>
)

const TextArea = ({ regex }) => {
    const [text, setText] = useState(initialText)
    const [count, setCount] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const didStartEditing = () => {
        setIsEditing(true)
    }

    const handleTextChange = event => {
        setText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setIsEditing(false)
    }

    return (
        <section className="text-area">
            <TextAreaHeader matchCount={count} />
            <div className="right">
                {isEditing ? (
                    <TextAreaForm
                        text={text}
                        onChange={handleTextChange}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <TextAreaView
                        onClick={didStartEditing}
                        text={text}
                        regex={regex}
                    />
                )}
            </div>
        </section>
    )
}

const mstp = state => {
    return {
        regex: reduceRegex(state)
    }
}

export default connect(mstp)(TextArea)
