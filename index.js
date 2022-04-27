const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user input
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
        message: 'Enter contribution guidelines for your project:',
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
            {
                name:'MIT License', 
                value: {
                    name:'MIT License',
                    badge:'MIT',
                    link:'https://opensource.org/licenses/MIT'
                }
            },
            {
                name:'ISC License',
                value: {
                    name:'ISC License',
                    badge:'ISC',
                    link:'https://opensource.org/licenses/ISC'
                }
            },
            {
                name:'Apache License 2.0',
                value: {
                    name:'Apache License 2.0',
                    badge:'Apache_2.0',
                    link:'https://www.apache.org/licenses/LICENSE-2.0'
                }
            },
            {
                name:'GNU GPLv3',
                value: {
                    name:'GNU General Public License v3.0',
                    badge:'GNU_GPLv3',
                    link:'https://www.gnu.org/licenses/gpl-3.0.en.html'
                }
            },
            {
                name:'Mozilla Public License 2.0',
                value: {
                    name:'Mozilla Public License 2.0',
                    badge:'MPL_2.0',
                    link:'https://www.mozilla.org/en-US/MPL/2.0/'
                }
            },
            {
                name:'Boost Software License 1.0',
                value: {
                    name:'Boost Software License 1.0',
                    badge:'Boost_1.0',
                    link:'https://www.boost.org/LICENSE_1_0.txt'
                }
            },
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

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'README created! Check /dist for the generated README'
            })
        })
    })
}

// Main function/promise chain for application
function init() {
    inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(markdown => writeToFile('README.md', markdown))
    .then(writeFileResponse => console.log(writeFileResponse.message))
    .catch(err => console.log(err))
}

// Function call to initialize app
init();
