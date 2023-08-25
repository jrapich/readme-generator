const badgeMaker = require("./badgeMaker");

//this function will take the answers object provided by inquirer.prompt
//and generate Markdown for the readme with the information provided
function generateMarkdown(data) {
  
  const readMeData = `
  # ${data.title}
  ${badgeMaker(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Questions](#questions?)
  - [License](#license)

  ## Installation
  ${data.info}

  ## Usage
  ${data.usage}

  Link to project repository: [${data.repo}](${data.repo})

  ## Tests
  ${data.tests}

  ## Credits
  ${data.contributors}

  ## Contributing
  How to contribute:
  Please reach out to me at ${data.email} or make a pull request at [${data.repo}](${data.repo})

  ## Questions?
  Any further questions, comments, or bug reports, can be sent to me at ${data.email}
  https://www.github.com/${data.github}

  ## License
  This project protected under ${data.license}.
  All rights reserved. See /LICENSE for more information.

  `;
  return readMeData;
}

//export function to other parts of the application
module.exports = generateMarkdown;
