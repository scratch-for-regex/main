import React from "react"

import "./App.scss"
import SideBar from "./components/SideBar/SideBar"
import RegexTextArea from "./components/RegexTextArea/RegexTextArea"
import RegexDisplay from "./components/RegexDisplay"

function App() {
    return (
        <div>
            <h1>Scratch for Regex</h1>
            <RegexDisplay />
            <SideBar className="SideBar" />
            <RegexTextArea />
        </div>
    )
}

export default App
