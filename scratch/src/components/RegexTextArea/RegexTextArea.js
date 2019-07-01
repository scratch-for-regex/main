import React from "react";


class RegexTextarea extends React.Component {
    state = {
        text: ""
    };

    render() {
        return (
            <div className="textarea">
                <textarea
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChanges}
                    rows="6"
                    cols="80"
                />
            </div>
        );
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
}

export default RegexTextarea;