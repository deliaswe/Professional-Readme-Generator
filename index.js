// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions=[
    {
        type: "input",
        name: "projectTitle",
        message: "Please state the same of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter your installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information.",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your application.",
        choices: ["MIT", "APACHE2.0", "Boost", "BSD", "BSD2", "BSD3", "Unlicense", "Open Data Commons", "Mozilla", "IBM", "ISC", "None"],
    },
    {
        type: "input",
        name: "contribution",
        message: "What is the contribution guidelines of your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter the test instructions.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Sucessfully created markdown file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions) 
    .then(data => {
        console.log(data);
        const markdownContent = generateMarkdown(data);
        console.log(markdownContent)
        writeToFile('./generatedReadme/READMW.md', markdownContent);
    })
}

// Function call to initialize app
init();
