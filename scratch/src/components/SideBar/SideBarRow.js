import React from "react"

export default class SideBarRow extends React.Component {
    render() {
        return (
            <li className="SideBarRow">
                <p>{this.props.regex.source}</p>
                <p>{this.props.purpose}</p>
            </li>
        )
    }
}
