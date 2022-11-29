// Requires Employee.js 
const Employee = require("../lib/Employee.js");

// Test to instantiate a new employee
test("Can this instantiate an Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

// Test for employee name 
test("Can add an employee name to arguments", () => {
    const name = "Jane";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// Test for employee id 
test("Can set ID to arguments", () => {
    const testValue = 200;
    const e = new Employee ("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// Test for employee email 
test("Can set email using arguments", () => {
    const testValue = "email@email.com"
    const e = new Employee ("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// Test for getting the name with getName()
test("Can get name with getName()", () => {
    const testValue = "Jane";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

// Test for getting the id with getId()
test("Can get id with getId()", () => {
    const testValue = 200;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// Test for getting the email with getEmail()
test("Can get email with getEmail()", () => {
    const testValue = "email@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// Test for getRole() returning Employee
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Jane", 1, "email@email.com");
    expect(e.getRole()).toBe(testValue);
});