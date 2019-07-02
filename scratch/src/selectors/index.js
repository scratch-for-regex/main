export const reduceRegex = ({ regexDisplay }) => {
    return regexDisplay.regexChars.reduce((prev, current) => {
        const globalModifier = prev.global ? "g" : ""
        const ignoreCaseModifier = prev.ignoreCase ? "i" : ""
        const multilineModifier = prev.mulitline ? "m" : ""
        const newRegex = prev.source + current.source
        return new RegExp(
            newRegex,
            globalModifier + ignoreCaseModifier + multilineModifier
        )
    }, new RegExp("", "g"))
}

export const formatRegex = ({ regexDisplay }) => {
    return "/" + regexDisplay.regexChars.map(r => r.source).join("") + "/g"
}
