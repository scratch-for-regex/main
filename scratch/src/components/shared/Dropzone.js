import React from "react"

const Dropzone = ({ children }) => {
    const handleDraggedOver = e => e.preventDefault()

    return <div onDragOver={handleDraggedOver}>{children}</div>
}

export default Dropzone
