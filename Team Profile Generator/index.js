// Require file structure and inquirer 
const fs = require('fs');
const inquirer = require('inquirer');

// Require employee classes 
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Require index.html 
const generateSite = require('./dist/index.html');

// Team placeholder
const team = [];

// Start of team builder questions
// Manager prompt
const getManager = () => {
    return inquirer.prompt[{
    type: "input",
    message: "What is your manager's name?",
    name: "managerName",
    validate: managerInput => {
        if (managerInput) {
            return true;
        } else {
            console.log("Please enter manager's name");
            return false;
        }
    }
    }]
}