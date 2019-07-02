import React from "react"
import { DraggableItem } from "../shared"
import { removeChar } from "../../actions"
import { connect } from "react-redux"

class DisplayCard extends React.Component {
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
                <span className="regex-char">
                    {String(this.props.regexInfo.regex).replace(/\//g, "")}
                    <div className="tooltip">
                        {this.props.regexInfo.purpose}
                    </div>
                </span>
            </DraggableItem>
        )
    }
}

const mstp = state => {
    return {}
}

export default connect(
    mstp,
    { removeChar }
)(DisplayCard)
