
  # readme-generator
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="126" height="20" role="img" aria-label="License: MIT License"><title>License: MIT License</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="126" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="75" height="20" fill="#007ec6"/><rect width="126" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="875" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="650">MIT License</text><text x="875" y="140" transform="scale(.1)" fill="#fff" textLength="650">MIT License</text></g></svg>
  
  ## Description
  README's are a common part of github, and programming projects. This tool will enable you generate a README for your project on the fly. Writing a proper README will no longer be a time consuming task.   I was glad to put into use the basic comcepts of modularization and using/installing packages from npm to get this application to work.  

  ## Table of Contents
- [readme-generator](#readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Questions?](#questions)
  - [License](#license)

  ## Installation
  The following are required to use this project:  
  NodeJS 18.17.0 or higher  

  The following NPM packages are required:  
  inquirer v8.2.4   
  fs v0.0.1-security   
  badge-maker v3.3.1   
  
  With Node installed, navigate to the application folder and install these packages by simply running:
  `npm install`

  ## Usage
  To run this script, run it with node:  

  `node index.js`   

  You will then see a series of questions, the information you provide to them will be used to generate markdown for your README file.  Any markdown syntax/format you add to the responses should also work.   

  The layout will mostly follow the readme template seen [Here]("./utils/template-readme.md).

  The script will also ask you to select which license your project is using; if no licenses are selected, an empty string will be returned instead. Currently, only the  open source licenses listed [here](https://www.choosealicense.com/licenses) are supported.   
  
  You can specify a filename for your readme, otherwise the default README.md filename will be generated. 

  Once the script is complete, it will generate your readme in the `/generated_files/` folder.

  Link to project repository: [https://github.com/jrapich/readme-generator](https://github.com/jrapich/readme-generator)

  There is an example readme generated with this project to `/generated_files/EXAMPLE.md`

  ## Tests
  none needed

  ## Credits
  This project is based on the following source/starter code provided from this repository:
  [https://github.com/coding-boot-camp/potential-enigma](https://github.com/coding-boot-camp/potential-enigma)

  no other contributors

  ## Contributing
  How to contribute:
  Please reach out to me at jeremysr@protonmail.com or make a pull request at [https://github.com/jrapich/readme-generator](https://github.com/jrapich/readme-generator)

  ## Questions?
  Any further questions, comments, or bug reports, can be sent to me at jeremysr@protonmail.com
  
  https://www.github.com/jrapich

  ## License
  This project protected under MIT License.
  All rights reserved. See /LICENSE for more information.

  