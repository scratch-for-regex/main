import React from "react"

import "./App.scss"
import SideBar from "./components/SideBar/SideBar"
import RegexTextArea from "./components/RegexTextArea/RegexTextArea"
import RegexDisplay from "./components/RegexDisplay"

function App() {
    return (
        <div className="app">
            <SideBar className="sidebar" />
            <div className="main-content">
                <h1>Scratch for Regex</h1>
                <RegexDisplay />
                <RegexTextArea />
            </div>
        </div>
    )
}

export default App
