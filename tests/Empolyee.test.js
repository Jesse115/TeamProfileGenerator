const Empolyee = require("../lib/Empolyee.js")
describe("Empolyee", () =>{
    test("test to get correct name", () =>{
        const example = new Empolyee("Jesse", 125 , "test@test.com")
        expect(example.getName()).toBe("Jesse")
    })
})