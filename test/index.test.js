const {handler} = require("../lib/index")

describe("index", () => {
    test("function returns null", () => {
        expect(handler()).toEqual(undefined)
    })
})