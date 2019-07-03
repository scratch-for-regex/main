import React from "react"
import { DraggableItem } from "../shared"
import { removeChar, editChar } from "../../actions"
import { connect } from "react-redux"

class DisplayCard extends React.Component {
    // We need to turn the regex into a string, then find the front and back characters ( the "[" and "]" )
    // Very repetitive code. If there's a drier way to write this, I'm all down for it '' '
    state = {
        regexFront: String(this.props.regexInfo.regex)
            .replace(/\//g, "")
            .match(/[\\{[(]/), //  \ [ ( {
        regexBack: String(this.props.regexInfo.regex)
            .replace(/\//g, "")
            .match(/[}\])]/),
        regexString: String(this.props.regexInfo.regex)
            .replace(/\//g, "")
            .replace(/[\\{[(]/, "")
            .replace(/[}\])]/, "")
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
                <div
                    className="display-card"
                    onClick={() =>
                        this.props.setPurpose(this.props.regexInfo.purpose)
                    }
                >
                    <form className="regex-char" onSubmit={this.submit}>
                        <span>
                            {this.state.regexFront
                                ? this.state.regexFront[0]
                                : ""}
                        </span>
                        <input
                            style={{
                                width:
                                    this.state.regexString.length * 1.65 + "rem"
                            }}
                            type="text"
                            name="regexString"
                            value={this.state.regexString}
                            onChange={this.handleChanges}
                            onBlur={this.reset}
                            readOnly={!this.props.regexInfo.acceptsInputs}
                        />
                        <span>
                            {this.state.regexBack
                                ? this.state.regexBack[0]
                                : ""}
                        </span>
                    </form>
                </div>
            </DraggableItem>
        )
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        this.props.setError(null)
    }

    // If the user clicks away from the input, reset it to what it originally was
    reset = e => {
        e.preventDefault()
        setTimeout(
            () =>
                this.setState({
                    regexString: String(this.props.regexInfo.regex)
                        .replace(/\//g, "")
                        .replace(/[\\{[(]/, "")
                        .replace(/[}\])]/, "")
                }),
            200
        )
    }

    submit = e => {
        e.preventDefault()

        // User erased everything inside the input? Sounds like they want to remove the regex bit
        if (this.state.regexString === "") {
            this.props.removeChar(this.props.regexInfo)
            return
        }

        // Get the proper strings for the front and back of the regex bit
        const regF = this.state.regexFront ? this.state.regexFront[0] : ""
        const regB = this.state.regexBack ? this.state.regexBack[0] : ""
        try {
            const regexNew = new RegExp(
                `${regF + this.state.regexString + regB}`
            )
            // Update object with new regex, and send to action creators
            this.props.editChar({ ...this.props.regexInfo, regex: regexNew })
            e.target.childNodes.forEach(elem => elem.blur())
        } catch (e) {
            const regLength =
                `${regF + this.state.regexString + regB}`.length + 2
            const error = `${e}`.substring(43 + regLength)
            this.props.setError(error)
        }
    }
}

const mstp = state => {
    return {}
}

export default connect(
    mstp,
    { removeChar, editChar }
)(DisplayCard)
