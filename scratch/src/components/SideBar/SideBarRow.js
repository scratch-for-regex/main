import React from "react"
import { connect } from "react-redux"
import { selectRegex } from "../../actions"

class SideBarRow extends React.Component {
    state = {
        isDragging: false
    }

    render() {
        return (
            <li
                className="SideBarRow"
                draggable="true"
                onDragStart={this.dragStart}
                onDragEnd={this.dragEnd}
            >
                <p>{this.props.regexObj.regex.source}</p>
                <p>{this.props.regexObj.purpose}</p>
            </li>
        )
    }

    dragStart = () => {
        this.setState({ ...this.state, isDragging: true })
    }

    dragEnd = event => {
        const isSuccessfulDrop = event.dataTransfer.dropEffect === "move"

        this.setState({ ...this.state, isDragging: false }, () => {
            if (isSuccessfulDrop) {
                this.props.selectRegex(this.props.regexObj)
            }
        })
    }
}

const mstp = () => {
    return {}
}

export default connect(
    mstp,
    { selectRegex }
)(SideBarRow)
