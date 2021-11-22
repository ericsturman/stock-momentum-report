const {handler} = require("../lib/index")
const AWS = require('aws-sdk-mock');

describe("index", () => {
    test("function returns null", () => {
        AWS.mock('S3', 'putObject', Buffer.from(require('fs').readFileSync('testFile.csv')));

        expect(handler()).toEqual(undefined)
    })
})