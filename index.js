// Packages needed for this application
const inquirer = require('inquirer');
const renderTemplate = require('./src/pageTemplate.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
//read docs on path
const path = require('path');

const teamMembers = [];

// An array of questions for user input
//How do I get from question 5 to question 6 or 10 or 13, and back to question 5?
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

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineername',
        message: 'What is the name of your engineer?',
    },
    {
        type: 'input',
        name: 'engineeremployeeid',
        message: 'What is the employee id of your engineer?',
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: 'What is the email address of your engineer?',
    },
    {
        type: 'input',
        name: 'engineergithub',
        message: 'What is the GitHub username of your engineer?',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internname',
        message: 'What is the name of your intern?',
    },
    {
        type: 'input',
        name: 'internemployeeid',
        message: 'What is the employee id of your intern?',
    },
    {
        type: 'input',
        name: 'internemail',
        message: 'What is the email address of your intern?',
    },
    {
        type: 'input',
        name: 'internschool',
        message: 'What school does your intern currently attend?',
    },
];

// Function to initialize app
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
        if(data.employeetype === 'engineer') {
            console.log('buildingEngineer')
            buildEngineer();
        }
        if(data.employeetype === 'intern') {
            console.log('buildingIntern')
            buildIntern();
        }
        if(data.employeetype === 'no') {
            console.log('buildingTeam')
            buildTeam();
        }
    }
    )
}
function buildEngineer() {
    console.log('buildingEngineer')
}
// Function to generate HTML
// Is this where I put it?
// function generateHtml(data) {
//     return `${data}
//   `;
// }

//module.exports = generateHTML;

// Function call to initialize app
init();