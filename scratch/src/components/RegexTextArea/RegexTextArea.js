import React from "react";
import { connect } from "react-redux";
import TextAreaEdit from "./TextAreaEdit";


class RegexTextarea extends React.Component {
    state = {
        text: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`,
    };

    render() {
        return (
            <div className="textarea">
                <p dangerouslySetInnerHTML={this.createMarkup()} />
                <TextAreaEdit 
                    value={this.state.text}
                    handleChanges={this.handleChanges}
                    />
            </div>
        );
    }
    
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // Turns each line break into a <br /> tag using dangerouslySetInnerHTML.
    // Use with caution.
    createMarkup() {
        return {__html: this.state.text.replace(/\n/g, "<br> ")}
    }

    // Regex Tester: Runs our regex code 
}


const mstp = state => {
    return {
        // regex: state.regex,
    }
}

export default connect(mstp)(RegexTextarea);