const Engineer = require("../lib/Engineer.js")
describe("Engineer", () =>{
    test("test to get correct name", () =>{
        const example = new Engineer("Jesse", 125 , "test@test.com")
        expect(example.getName()).toBe("Jesse")
    })
})