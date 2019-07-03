import React from "react"
import { DraggableItem } from "../shared"
import { removeChar } from "../../actions"
import { connect } from "react-redux"

class DisplayCard extends React.Component {
    state = {
        regexFront: String(this.props.regexInfo.regex).replace(/\//g, "").match(/[\\{[(]/),
        regexBack: String(this.props.regexInfo.regex).replace(/\//g, "").match(/[}\])]/),
        regexString: String(this.props.regexInfo.regex).replace(/\//g, "").replace(/[\\{[(]/, "").replace(/[}\])]/, "")
    }

    render() {
        return (
            <DraggableItem
                didDrop={isSuccess => {
                    // If success is true, we're still inside a good dropzone. Otherwise, we want the component to disappear.
                    if (!isSuccess) {
                        this.props.removeChar(this.props.regexInfo)
                    }
                }}
            >
                {/* <span className="regex-char">
                    {String(this.props.regexInfo.regex).replace(/\//g, "")}
                    <div className="tooltip">
                        {this.props.regexInfo.purpose}
                    </div>
                </span> */}
                <form className="regex-char" onSubmit={this.submit}>
                    <span>{this.state.regexFront ? this.state.regexFront[0] : ""}</span>
                    <input 
                        type="text"
                        name="regexString"
                        value={this.state.regexString}
                        onChange={this.handleChanges}
                        // readOnly={!this.props.regexInfo.acceptsInput}
                        readOnly={false}
                    />
                    <span>{this.state.regexBack ? this.state.regexBack[0] : ""}</span>
                    <div className="tooltip">
                        {this.props.regexInfo.purpose}
                    </div>
                </form>
            </DraggableItem>
        )
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        if (this.state.regexString === "") {
            this.props.removeChar(this.props.regexInfo)
            return
        }
        const regF = this.state.regexFront ? this.state.regexFront[0] : "";
        const regB = this.state.regexBack ? this.state.regexBack[0] : "";
        const regex = new RegExp(`${regF + this.state.regexString + regB}`)
        console.log(regex)
    }
}

const mstp = state => {
    return {}
}

export default connect(
    mstp,
    { removeChar }
)(DisplayCard)
