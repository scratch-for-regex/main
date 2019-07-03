import React from "react"
import { connect } from "react-redux"

import "./SideBar.scss"

import logo from "../../images/logo.svg"

import SideBarRow from "./SideBarRow"

class SideBar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <img className="logo" src={logo} alt="Logo for /found/text" />

                <section>
                    <h3>Character Classes</h3>
                    <ul className="characters">
                        {this.props.characters.map(regexObj => (
                            <SideBarRow key={regexObj.id} regexObj={regexObj} />
                        ))}
                    </ul>
                </section>
            </aside>
        )
    }
}

export default connect(
    ({ regex }) => ({ characters: regex.characters }),
    {}
)(SideBar)
