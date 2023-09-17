//packages and modules required for application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const {renderPackageVersion} = require("./utils/badgeMaker");
const fs = require("fs");
//any global variables we may need
let fileName = "README.md";

//choose an option, generate readme or generate a badge for readme
const landing = {
    first:{
        type:"list",
        name:"landingPrompt",
        message:"What would you like to do?",
        choices:[
        "Generate a readme",
        "Generate a badge for a readme"
    ]
    },
    second:[
        {
            type:"input",
            name:"package",
            message:"Type in the package name:"
        },
        {
            type:"input",
            name:"version",
            message:"Type in the package version:"  
        }
    ],
    third:{
        type:"list",
        name:"exit",
        message:"what to do next?",
        choices:[
            "start over",
            "exit"
        ]
    }
};

//An array of questions to ask the user with inquirer.prompt
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
        type:"input",
        name:"repo",
        message:"Enter the link to your project repository:"
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
        name:"fileName",
        message:"Specify a filename for your README, and it will be generated in the /generated_files/ folder. If left blank, the default name of README will be generated:"
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

//a function that will write the readme file to /generated_files/
async function writeToFile(fileName, data) { 
    fs.writeFile(`./generated_files/${fileName}`, data, async function () {
        console.log(`SUCCESS! File written to ./generated_files/${fileName}`);
    });
}

//application initialization to landing prompt
async function init(){
    const landingPath = await inquirer.prompt(landing.first);
    (landingPath.landingPrompt === landing.first.choices[0]) ? init2() 
    : inquirer.prompt(landing.second).then(async (answers)=>{
        const badge = await renderPackageVersion(answers.package, answers.version);
        await writeToFile(`${answers.package}-${answers.version}.svg`, badge);
        const nextAction = await inquirer.prompt(landing.third);
        (nextAction === landing.third.choices[0]) ? init() : process.exit();
    });
}

//application initialization to main readme generating prompt
function init2() {
    inquirer.prompt(questions).then((answers)=> {
        //pass the data from users answers to inquire.prompt, to generateMarkdown, then write the readme file to /generated_files/
        console.log(answers);
        if (answers.fileName) {
            fileName = `${answers.fileName}.md`;
        }
        const readMeData = generateMarkdown(answers);
        writeToFile(fileName, readMeData);
    })
}

// Function call to initialize app
init();
