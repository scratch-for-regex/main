import uuid from "uuid/v4"

export const characterClasses = [
    { id: uuid(), regex: /\w/, purpose: "Select word characters", acceptsInputs: false },
    { id: uuid(), regex: /\d/, purpose: "Select digits", acceptsInputs: false },
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
    },
    {
        id: uuid(),
        regex: /[A-Z]/,
        purpose: "Select a range of, or individual characters",
        acceptsInputs: true
    },
    {
        id: uuid(),
        regex: /(evi)/,
        purpose: "Select a specific group of characters",
        acceptsInputs: true
    }
]
