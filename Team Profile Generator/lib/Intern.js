// Requires Employee.js 
const Employee = require('./Employee.js');

// Creates Manager class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school=school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// Exports this class
module.exports = Intern;