// Requires Manager.js
const Manager = require("../lib/Manager.js");

// Test to set office number
test("Can set office number using constructor", () => {
    const testValue = 200;
    const e = new Manager("Foo", 1, "email@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

// Test to return Manager class
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "email@email.com", 200);
    expect(e.getRole()).toBe(testValue);
});

// Test to get office number with getOfficeNumber()
test("Can get office number with getOfficeNumber()", () => {
    const testValue = 200;
    const e = new Manager("Foo", 1, "email@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});