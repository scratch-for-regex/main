import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import createStore from "./store"
import reducers from "./reducers"

import "./scss/global.scss"

import App from "./App"

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
