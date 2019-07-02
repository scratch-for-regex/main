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
                <li className="SideBarRow">
                    <p>{this.props.regexObj.regex.source}</p>
                    <p>{this.props.regexObj.purpose}</p>
                </li>
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
