import React from "react"
import { connect } from "react-redux"

import dragIcon from "../../images/drag-dots.png"

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
                <li className="character">
                    <img
                        className="drag-icon"
                        src={dragIcon}
                        alt="Draggable Icon"
                    />
                    <div className="regex-data">
                        <span className="regex">
                            {this.props.regexObj.regex.source}
                        </span>
                        <span className="purpose">
                            {this.props.regexObj.purpose}
                        </span>
                    </div>
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
