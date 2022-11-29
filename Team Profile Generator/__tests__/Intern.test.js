// Requires intern.js
const Intern = require("../lib/Intern.js");

// Test to set school information
test("Can set school using constructor", () => {
    const testValue = "ACC";
    const e = new Intern("Foo", 1, "email@email.com", testValue);
    expect(e.school).toBe(testValue);
});

// Test to return Intern class
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "email@email.com", "ACC");
    expect(e.getRole()).toBe(testValue);
});

// Test to get school with getSchool()
test("Can get school with getSchool()", () => {
    const testValue = "ACC";
    const e = new Intern("Foo", 1, "email@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});