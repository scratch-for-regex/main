import React from "react"

const ErrorCard = props => {
    return (
        <div className={props.class}>
            <h1>Error</h1>
            <h3>{props.error}</h3>
        </div>
    )
}

export default ErrorCard