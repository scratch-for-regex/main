import React from "react"
import { connect } from "react-redux"

import SideBarRow from "./SideBarRow"

class SideBar extends React.Component {
    render() {
        return (
            <div>
                <h2>Sidebar</h2>
                <ul>
                    {this.props.characters.map(({ id, ...rest }) => (
                        <SideBarRow key={id} {...rest} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(
    ({ regex }) => ({ characters: regex.characters }),
    {}
)(SideBar)
