import React from "react"
import { connect } from "react-redux"
import TextAreaEdit from "./TextAreaEdit"

import "./RegexTextArea.scss"

import { reduceRegex } from "../../selectors"

class RegexTextArea extends React.Component {
    state = {
        text: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`
    }

    render() {
        const regexOutput = this.createMarkup()
        return (
            <div className="textarea">
                <p dangerouslySetInnerHTML={regexOutput.text} />
                <br />
                <p>Total Matches found via regex: {regexOutput.count}</p>
                <TextAreaEdit
                    value={this.state.text}
                    handleChanges={this.handleChanges}
                />
            </div>
        )
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Runs our text through regex and stores:
    //   The text as a regexText value in state,
    //   and a count to show how many regex matches there were.
    regexTester = () => {
        let count = 0
        const regexText = this.state.text.replace(
            this.props.regex ? this.props.regex : /\s/g,
            match => {
                count++
                return `<span className="highlight">${match}</span>`
            }
        )

        // Returns an object containing the text with spans for regex highlighting, and a count for all regex matches.
        return { regexText, count }
    }

    // Calls the regexTester and returns the output(formatted properly)
    createMarkup = () => {
        const regexResult = this.regexTester()
        console.log(regexResult)
        return {
            text: { __html: regexResult.regexText.replace(/\n/g, "<br> ") },
            count: regexResult.count
        }
    }
}

const mstp = state => {
    return {
        regex: reduceRegex(state)
    }
}

export default connect(mstp)(RegexTextArea)
