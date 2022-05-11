// Packages needed for this application
const inquirer = require('inquirer');
//What else?

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'managername',
        message: 'What is the name of your manager?',
    },
    {
        type: 'input',
        name: 'manageremployeeid',
        message: 'What is the employee id of your manager?',
    },
    {
        type: 'input',
        name: 'manageremail',
        message: 'What is the email address of your manager?',
    },
    {
        type: 'input',
        name: 'managerofficenumber',
        message: 'What is the office number of your manager?',
    },
    {
        type: 'list',
        name: 'employeetype',
        message: 'Would you like to add another employee to this team?',
        choices: ['engineer', 'intern', 'no']
    },
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
    inquirer.prompt(questions).then((data) => {
        // Function to write html file
        const output = generateHtml(data);
        fs.writeFile('output.html', output, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Your webpage has been generated!');
        });
    });
}

// Function to generate HTML
function generateHtml(data) {
    return `# ${data}

  `;
}

module.exports = generateHTML;

// Function call to initialize app
init();