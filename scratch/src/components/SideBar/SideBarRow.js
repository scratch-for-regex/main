import React from "react"
import { connect } from "react-redux"

import { DraggableItem } from "../shared"
import { selectRegex } from "../../actions"

// TODO: Refactor this into a Functional Component
class SideBarRow extends React.Component {
    handleDidDrop = isSuccess => {
        if (isSuccess) {
            this.props.selectRegex(this.props.regexObj)
        }
    }

    render() {
        return (
            <DraggableItem didDrop={this.handleDidDrop}>
                <div className="regex-card">
                    <h3 className="monospace">{this.props.regexObj.regex.source}</h3>
                    <p className="monospace">{this.props.regexObj.purpose}</p>
                </div>
            </DraggableItem>
        )
    }
}

const mstp = () => {
    return {}
}

export default connect(
    mstp,
    { selectRegex }
)(SideBarRow)
