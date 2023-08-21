// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
    title: "Welcome to README GENERATOR 3000. Please enter the title of your project:",
    description: "Please enter a good description for your project:",
    info: "Please enter any information relevant on how to install your project:",
    usage: "Please describe in detail how to use your project, and what it accomplishes. Include any command line parameters etc:",
    license: "Does your project have a license? type ONLY y for yes, or n for no:",
    contributors: "Does your project have any contributors? If so, list them here, separated by semicolons:",
    tests: "Describe any tests here, or describe in detail how to test your project/code:",
    fileName: "Specify a filename for your README, and it will be generated in the /generated_files/ folder. If left blank, the default name of README.md will be generated:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(`./generated_files/${fileName}`, data, function () {
        console.log(`SUCCESS! README written to ./generated_files/${fileName}`);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {

    })
}

// Function call to initialize app
init();
