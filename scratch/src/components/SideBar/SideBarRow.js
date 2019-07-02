import React from "react"
import { connect } from "react-redux"
import { dragStart, dragEnd } from "../../actions"

class SideBarRow extends React.Component {
    render() {
        return (
            <li className="SideBarRow" draggable="true" onDragStart={this.dragStart} onDragEnd={this.dragEnd}>
                <p>{this.props.regex.source}</p>
                <p>{this.props.purpose}</p>
            </li>
        )
    }

    dragStart = e => {
        this.props.dragStart(this.props.id)
    }

    dragEnd = e => {
        e.preventDefault();
        setTimeout(() => this.props.dragEnd, 100);
    }
}

const mstp = state => {
    return  {}
}

export default connect(mstp, { dragStart, dragEnd })(SideBarRow);