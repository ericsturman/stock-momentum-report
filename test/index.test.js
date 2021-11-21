const fun = require("../lib/index")

describe("index", () => {
    test("function returns null", () => {
        expect(fun.handler()).toEqual(undefined)
    })
})