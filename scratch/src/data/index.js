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
    },
    {
        id: uuid(),
        regex: /\W/,
        purpose: "Select what's NOT a word",
        acceptsInputs: false
    },
    { id: uuid(), regex: /A/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /B/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /C/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /D/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /E/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /F/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /G/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /H/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /I/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /J/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /K/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /L/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /M/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /N/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /O/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /P/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /Q/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /R/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /S/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /T/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /U/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /V/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /W/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /X/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /Y/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /Z/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /0/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /1/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /2/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /3/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /4/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /5/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /6/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /7/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /8/, purpose: "", acceptsInputs: false },
    { id: uuid(), regex: /9/, purpose: "", acceptsInputs: false }    
        
    // { id: uuid(), regex: /()/, purpose: "Group", acceptsInputs: false },
    // {
    //     id: uuid(),
    //     regex: /[]/,
    //     purpose: "Matching characters",
    //     acceptsInputs: false
    // },
    // {
    //   id: uuid(),
    //   regex: /^/,
    //   purpose: "Invert Matching characters",
    //   acceptsInputs: false
  // }    
]
