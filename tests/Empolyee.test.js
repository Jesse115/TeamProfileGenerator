const employee = require("../lib/employee.js")
describe("employee", () =>{
    test("test to get correct name", () =>{
        const example = new employee("Jesse", 125 , "test@test.com")
        expect(example.getName()).toBe("Jesse")
    })
})