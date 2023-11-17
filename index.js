// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("inquirer");
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
},
{
    type: "input",
    name: "license",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
},
{
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here.",
},
{
    type: "input",
    name: "how to contribute",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
},
{
    type: "input",
    name: "Tests",
    message:"Go the extra mile and write tests for your application. Then provide examples on how to run them here."
},  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./Develop/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
