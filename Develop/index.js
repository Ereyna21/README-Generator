// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of this project?",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions for your application.",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the usage instructions for your application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Do you have any specific contribution guidelines for your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Could you provide instructions for running tests on your application?",
    name: "tests",
  },
  {
    type: "list",
    message: "Please select a license that is applicable to this project?",
    name: "license",
    choices: ["MIT", "gpl-3.0", "bsl-1.0", "unlicense"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address for additional questions?",
    name: "email",
  },
];

// Create a function to write README file
function createNewFile(fileName, data) {

  // This creates a function to write README file
  fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, generateMarkdown(data), (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}.md:`, err);
    } else {
      console.log(`${fileName}.md has been successfully generated.`);
    }
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      createNewFile("readme", answers);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the function to start the user prompt
init();
