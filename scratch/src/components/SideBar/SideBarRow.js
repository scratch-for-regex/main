import React from "react"

export default class SideBarRow extends React.Component {
    render() {
        console.log("SideBarRow props", this.props)
        return (
            <div className="SideBarRow">
                <p>{this.props.regex}</p>
                <p>{this.props.summary}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
