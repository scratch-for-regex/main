import React, { useState, useEffect } from "react"

const DraggableItem = ({ children, didStartDrag, didDrop }) => {
    const [isDragging, setIsDragging] = useState(null)
    const [isDropSuccess, setIsDropSuccess] = useState(false)

    useEffect(() => {
        if (isDragging === false && didDrop) {
            didDrop(isDropSuccess)
        }
    }, [isDragging, didDrop, isDropSuccess])

    const handleDragStart = () => {
        setIsDragging(true)
        if (didStartDrag) {
            didStartDrag()
        }
    }

    const handleDragEnd = event => {
        setIsDragging(false)
        setIsDropSuccess(event.dataTransfer.dropEffect === "move")
    }

    return (
        <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {children}
        </div>
    )
}

export default DraggableItem
