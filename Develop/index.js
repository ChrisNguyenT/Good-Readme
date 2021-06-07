// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title.');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for the project.');
                return false;
            }
        }
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },
    // Project Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information.');
                return false;
            }
        }
    },
    // Project Contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.');
                return false;
            }
        }
    },
    // Project Testing
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter testing instructions.');
                return false;
            }
        }
    },
    // Project License
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: ['Apache', 'MIT', 'GPL'],
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Uuername.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email.');
                return false;
            }
        }
    },
];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README successfully created!')
    });
};

// Function to initialize application
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize application
init();
