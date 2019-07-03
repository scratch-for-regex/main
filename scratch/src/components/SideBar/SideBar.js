import React from "react"
import { connect } from "react-redux"
import "./SideBar.scss"
import SideBarRow from "./SideBarRow"

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    {this.props.characters.map(regexObj => (
                        <SideBarRow key={regexObj.id} regexObj={regexObj} />
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
