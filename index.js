const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
    type:'input',
    name: 'title',
    message: 'Enter your project title (required):',
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
    message: 'Enter the description for your project (required):',
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
    message: 'Enter the installation instructions for your project (required):',
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
    message: 'Enter the usage information for your project (required):',
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
    message: 'Enter contribution guidlines for your project (required):',
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
    message: 'Enter testing instructions for your project (required):',
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
        {name:'MIT', value:'MIT'},
        {name:'ISC', value:'ISC'},
        {name:'Apache 2.0', value:'Apache_2.0'},
        {name:'GNU GPLv3', value:'GNU_GPLv3'},
        {name:'Mozilla Public License 2.0', value:'Mozilla_2.0'},
        'none'
    ],
    },
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
