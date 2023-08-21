// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "Welcome to README GENERATOR 3000. Please enter the title of your project:",
    "Please enter a good description for your project:",
    "Please enter any information relevant on how to install your project:",
    "Please describe in detail how to use your project, and what it accomplishes. Include any command line parameters etc:",
    "Does your project have a license? type ONLY y for yes, or n for no:",
    "Does your project have any contributors? If so, list them here, separated by semicolons:",
    "Describe any tests here, or describe in detail how to test your project/code:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
