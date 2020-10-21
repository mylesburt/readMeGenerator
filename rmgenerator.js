const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "How would you describe your project?",
                name: "description"
            },
            {
                type: "input",
                message: "Please insert installation instructions:",
                name: "installation"
            },
            {
                type: "input",
                message: "How do you use your project?",
                name: "usage"
            },
            {
                type: "checkbox",
                message: "Choose a license.",
                choices: [
                    "MIT",
                    "Apache",
                    "GPL GPLv3",
                    "ISC",
                    "Public Domain (Unlicensed)"
                ],
                name: "license"
            },
            {
                type: "input",
                message: "What are the rules for contributing?",
                name: "contributors"
            },
            {
                type: "input",
                message: "Run tests here:",
                name: "input"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            }

        ]);
}

function generateMarkdown(data) {
    return `
        
    # ${data.title}
    
    ## Table of Contents
    
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Constributors](#contributors)
        - [Input](#input)
        - [Questions](#questions)
    
    ## Description
        ${data.description}
    
    ## Installation
        ${data.installation}
    
    ## Usage
        ${data.usage}
    
    ## Contributors
        ${data.contributors}
    
    ## Input
        ${data.input}
    
    ## Questions
    - Github: ${data.github}
    - Email: ${data.email}
    
    This project is ${data.license} licensed.
    
    `;
}

async function init() {
    try {
        const data = await promptUser();
        const readMe = generateMarkdown(data);
        await writeFileAsync("README.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}

init();