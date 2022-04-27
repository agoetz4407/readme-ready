const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'Enter your project title:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter a project title')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'description',
        message: 'Enter the description for your project:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter project description')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter installation instructions for your project')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'usage',
        message: 'Enter the usage information for your project:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter usage information for your project')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'contribution',
        message: 'Enter contribution guidlines for your project:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter contribution guidlines for your project')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'testing',
        message: 'Enter testing instructions for your project:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter testing instructions for your project')
                return false
            }
        }
    },
    {
        type:'list',
        name: 'license',
        message: `Choose your license (or select "none" for no license):`,
        defaut: 'none',
        choices: [
            'MIT License',
            'ISC License',
            'Apache License 2.0',
            'GNU GPLv3',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0',
            'none'
        ],
    },
    {
        type:'input',
        name: 'github',
        message: 'Enter your Github username:',
        validate: input => {
            if (input) {
                return true
            } else {
                console.log('Please enter your Github username')
                return false
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: input => {
            if (!input || !input.includes('@') || !input.includes('.')) {
                console.log(' Please enter a valid email address')
                return false
            }
            else {
                return true
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => console.log(answers))
}

// Function call to initialize app
init();
