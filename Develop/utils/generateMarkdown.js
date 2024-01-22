// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `<img src="https://img.shields.io/badge/license-${license}-blue)" />`
}                           

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  return `## License
  ${renderLicenseBadge(license)}\n
  This project is licensed under the ${license} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me through:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
