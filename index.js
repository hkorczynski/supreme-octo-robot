// Require file structure and inquirer 
const fs = require('fs');
const inquirer = require('inquirer');

// Require employee classes 
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Require index.html 
const generateSite = require('./dist/index.html');