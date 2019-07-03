import { reduceRegex } from "../../selectors"
import { characterClasses } from "../../data"

const state = {
    regex: { selectedCharacters: characterClasses }
}

test("reduces regexes to single RegExp object", () => {
    const regex = reduceRegex(state)
    expect(regex.source).toBe("(?:)\\w\\d\\s\\W\\D\\S[A-Z](evi)")
})
