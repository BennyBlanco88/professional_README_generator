// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message:"What is the name of your project.",
},
{
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
},

{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
},
{
   type: "input",
   name: "credits",
   message: "List your collaborators, if any, with links to their GitHub profiles.",
   default: "",
},
{
    type: "list",
    name: "license",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    choices: ['B-DOG DeSigns'],
},
{
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here.",
},
{
 
    type: "input",
    name: "Tests",
    message:"Go the extra mile and write tests for your application. Then provide examples on how to run them here."
},

{
    type:"input",
    name: "creator",
    message: "Please enter your GitHub username:",
},
{
    type:"input",
    name: "email",
    message: "Please enter your email:",
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./utils/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
