import React from "react"
import { connect } from "react-redux"
import "./SideBar.scss"
import SideBarRow from "./SideBarRow"

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h2>LOGO HERE</h2>
                <h3 className="monospace">CHARACTER CLASSES</h3>
                <div className="sidebar-list">
                    {this.props.characters.map(regexObj => (
                        <SideBarRow key={regexObj.id} regexObj={regexObj} />
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(
    ({ regex }) => ({ characters: regex.characters }),
    {}
)(SideBar)
