import React from "react"

const ErrorCard = props => {
    return (
        <div className="regex-error">
            <h1>Error</h1>
            <h3>{props.error}</h3>
        </div>
    )
}

export default ErrorCard