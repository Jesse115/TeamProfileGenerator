const Intern = require("../lib/Intern.js")
describe("Intern", () =>{
    test("test to get correct name", () =>{
        const example = new Intern("Jesse", 124 , "test@test.com")
        expect(example.getName()).toBe("Jesse")
    })
})