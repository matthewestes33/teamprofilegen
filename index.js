// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// Link to page creation
const renderTemplate = require('./src/pageTemplate.js');

// Team profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//path module provides functionality to access and interact with the file system
//https://nodejs.dev/learn/the-nodejs-path-module
const path = require('path');

//Team array for generated HTML
const teamMembers = [];

// An array of manager questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of your manager?',
    },
    {
        type: 'input',
        name: 'managerEmployeeid',
        message: 'What is the employee id of your manager?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email address of your manager?',
    },
    {
        type: 'input',
        name: 'managerOfficenumber',
        message: 'What is the office number of your manager?',
    },
];

// An array of engineer questions for user input
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your engineer?',
    },
    {
        type: 'input',
        name: 'engineerEmployeeid',
        message: 'What is the employee id of your engineer?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email address of your engineer?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the GitHub username of your engineer?',
    },
];

// An array of intern questions for user input
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your intern?',
    },
    {
        type: 'input',
        name: 'internEmployeeid',
        message: 'What is the employee id of your intern?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email address of your intern?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does your intern currently attend?',
    },
];

// Function to build manager profile
function init() {
    inquirer.prompt(managerQuestions).then((data) => {
        console.log(data)
        const manager = new Manager(data.managerName, data.managerEmployeeid, data.managerEmail, data.managerOfficenumber)
        console.log(manager)
        teamMembers.push(manager)
        console.log(teamMembers)
        getMenu()
    });
}

// Function to build engineer profile
function buildEngineer() {
    inquirer.prompt(engineerQuestions).then((data) => {
        console.log(data)
        const engineer = new Engineer(data.engineerName, data.engineerEmployeeid, data.engineerEmail, data.engineerGithub)
        console.log(engineer)
        teamMembers.push(engineer)
        console.log(teamMembers)
        getMenu()
    });
}

// Function to build intern profile
function buildIntern() {
    inquirer.prompt(internQuestions).then((data) => {
        console.log(data)
        const intern = new Intern(data.internName, data.internEmployeeid, data.internEmail, data.internSchool)
        console.log(intern)
        teamMembers.push(intern)
        console.log(teamMembers)
        getMenu()
    });
}

// Function to ask menu question, build engineer profile, build intern profile, and complete iteration.
//How do I get questions to cycle until complete?
function getMenu() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeetype',
            message: 'Would you like to add another employee to this team?',
            choices: ['engineer', 'intern', 'no']
        }
    ).then((data) => {
        console.log(data)
        if (data.employeetype === 'engineer') {
            console.log('buildingEngineer')
            buildEngineer()
        }
        if (data.employeetype === 'intern') {
            console.log('buildingIntern')
            buildIntern();

        }
        if (data.employeetype === 'no') {
            console.log('buildingTeam')
            buildTeam();
            //finish
        }
    }
    )
}

// Function call to initialize app
init();