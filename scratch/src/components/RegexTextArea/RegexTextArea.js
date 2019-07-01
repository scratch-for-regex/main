import React from "react";
// import { connect } from "react-redux";


class RegexTextarea extends React.Component {
    state = {
        text: this.props.text ? this.props.text : "",
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

export default RegexTextarea; // REMOVE once redux is in place

// mstp = state => {
//     return {
//         text: "", // Name of property that holds text state.text
//     }
// }

// export default connect(mstp)(RegexTextarea);