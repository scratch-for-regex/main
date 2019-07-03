import React from "react"

import "./App.scss"
import SideBar from "./components/SideBar/SideBar"
import RegexTextArea from "./components/RegexTextArea/RegexTextArea"
import RegexDisplay from "./components/RegexDisplay"

function App() {
    return (
        <div className="app">
            <SideBar />
            <div className="main-content">
                <RegexDisplay />
                <RegexTextArea />
            </div>
        </div>
    )
}

export default App
