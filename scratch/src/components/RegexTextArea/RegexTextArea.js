import React from "react"
import { connect } from "react-redux"
import TextAreaEdit from "./TextAreaEdit"
import "./RegexTextArea.scss"

class RegexTextarea extends React.Component {
    state = {
        text: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`
    }

    render() {
        this.regexTesterAndMarkup()
        return (
            <div className="textarea">
                <p dangerouslySetInnerHTML={this.regexTesterAndMarkup()} />
                <TextAreaEdit
                    value={this.state.text}
                    handleChanges={this.handleChanges}
                />
            </div>
        )
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /*
        Regex Tester: Runs our regex code through the text.
        This method also turns code into markup text, exchanging line breaks for a <br> tag.
        I couldn't find a way to properly separate these two functionssteps into separate methods, so they're combined into one.
    */
    regexTesterAndMarkup() {
        const regexTest = this.state.text.replace(
            this.props.regex ? this.props.regex : /\s/g,
            match => `<span className="highlight">${match}</span>`
        )
        return { __html: regexTest.replace(/\n/g, "<br> ") }
    }
}

const mstp = state => {
    return {
        // regex: state.regex,
    }
}

export default connect(mstp)(RegexTextarea)
