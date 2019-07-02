import React from "react"
import { connect } from "react-redux"

import SideBarRow from "./SideBarRow"

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    {this.props.characters.map(obj => (
                        <SideBarRow key={obj.id} {...obj} />
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
