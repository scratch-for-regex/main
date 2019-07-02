import uuid from "uuid/v4"

export const characterClasses = [
    { id: uuid(), regex: /\w/, purpose: "Select word", acceptsInputs: false },
    { id: uuid(), regex: /\d/, purpose: "Select digit", acceptsInputs: false },
    {
        id: uuid(),
        regex: /\s/,
        purpose: "Select whitespace",
        acceptsInputs: false
    },
    {
        id: uuid(),
        regex: /\W/,
        purpose: "Select what's NOT a word",
        acceptsInputs: false
    },
    {
        id: uuid(),
        regex: /\D/,
        purpose: "Select what's NOT a digit",
        acceptsInputs: false
    },
    {
        id: uuid(),
        regex: /\S/,
        purpose: "Select what's NOT whitespace",
        acceptsInputs: false
    }
]
