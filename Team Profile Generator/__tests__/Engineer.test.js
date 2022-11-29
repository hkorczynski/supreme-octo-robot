// Requires engineer.js
const Engineer = require("../lib/Engineer.js");

// Test to set github account 
test("Can set Github account using constructor", () => {
    const testValue = "GithubName";
    const e = new Engineer("Foo", 1, "email@email.com", testValue);
    expect(e.github).toBe(testValue);
});

// Test to return Engineer class
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "email@email.com", "GithubName");
    expect(e.getRole()).toBe(testValue);
});

// Test to get github with username input 
test("Can get Github username with getGithub()", () => {
    const testValue = "GithubName";
    const e = new Engineer("Foo", 1, "email@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});