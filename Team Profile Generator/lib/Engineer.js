// Requires Employee.js 
const Employee = require('./Employee.js');

// Creates Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github=github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

// Exports this class
module.exports = Engineer;