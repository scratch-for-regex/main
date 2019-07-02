import React from "react"
import { useSelector } from "react-redux"

import { Dropzone, DraggableItem } from "../shared"
import { formatRegex } from "../../selectors"

const RegexDisplay = () => {
    const formattedRegex = useSelector(formatRegex)

    return (
        <div>
            <h3>Regex Display</h3>
            <Dropzone>
                <ul>
                    <DraggableItem
                        didDrop={isSuccess =>
                            console.log(`Drop was a success? ${isSuccess}`)
                        }
                    >
                        <li>{formattedRegex}</li>
                    </DraggableItem>
                </ul>
            </Dropzone>
        </div>
    )
}

export default RegexDisplay
