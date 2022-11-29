// Requires Employee.js 
const Employee = require('./Employee.js');

// Creates Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber=officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

// Exports this class
module.exports = Manager;