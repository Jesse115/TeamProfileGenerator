const Manager = require("../lib/Manager.js")
describe("Manager", () =>{
    test("test to get correct name", () =>{
        const example = new Manager("Jesse", 144 , "test@test.com")
        expect(example.getName()).toBe("Jesse")
    })
})