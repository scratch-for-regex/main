export const reduceRegex = ({ regex }) => {
    return regex.selectedCharacters.reduce((prev, current) => {
        const globalModifier = prev.global ? "g" : ""
        const ignoreCaseModifier = prev.ignoreCase ? "i" : ""
        const multilineModifier = prev.mulitline ? "m" : ""
        const newRegex = prev.source + current.regex.source
        return new RegExp(
            newRegex,
            globalModifier + ignoreCaseModifier + multilineModifier
        )
    }, new RegExp("", "g"))
}

export const formatRegex = ({ regex }) => {
    return (
        "/" + regex.selectedCharacters.map(r => r.regex.source).join("") + "/g"
    )
}

export const draggingObj = ({ regex }) => {
    return regex.draggingObj
}
