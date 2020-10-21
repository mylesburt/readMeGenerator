const fs = require("fs")
const inquirer = require("inquirer");

inquirer
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
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "GPL GPLv3",
                "ISC",
                "Public Domain (Unlicensed)"
            ]
        },
        //Might put badges here...
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
            message: "What is your GitHub username?"
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?"
            name: "email"
        }

    ]).then(answers => {
        const {
            title,
            description,
            installation,
            usage,
            license,
            contributors,
            input,
            github,
            email
        } = answers;


    })