// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Welcome to README GENERATOR 3000. Please enter the title of your project:"
    },
    {
        type:"input",
        name:"description",
        message:"Please enter a good description for your project:"
    },
    {
        type:"input",
        name:"info",
        message:"Please enter any information relevant on how to install your project:"
    },
    {
        type:"input",
        name:"usage",
        message:"Please describe in detail how to use your project, and what it accomplishes. Include any command line parameters etc:"
    },
    {
        type:"list",
        name:"license",
        message:"Please select which open source license your project is using:",
        choices:[
            "MIT License",
            "GNU APGLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "Boost Software License 1.0",
            "The Unilicense"
        ]
    },
    {
        type:"input",
        name:"contributors",
        message:"Does your project have any contributors? If so, list them here, separated by semicolons:"
    },
    {
        type:"input",
        name:"tests",
        message:"Describe any tests here, or describe in detail how to test your project/code:"
    },
    {
        type:"input",
        name:fileName,
        message:"Specify a filename for your README, and it will be generated in the /generated_files/ folder. If left blank, the default name of README.md will be generated:"
    },
    {
        type:"input",
        name:"github",
        message:"Enter your github username:"
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address:"
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
        //pass the data from user questions to generateMarkdown, then write the readme file to /generated_files/
        const readMeData = generateMarkdown(answers);
        writeToFile(answers.title, readMeData);
    })
}

// Function call to initialize app
init();
