// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `${license}`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage})
  ## Table of Contents
  * [Features](#features)
  * [Credits](#credits)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Credits
  ${data.credits}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions (${data.email}) or visit (https://github.com/${data.creator}).

`;
}

module.exports = generateMarkdown;
