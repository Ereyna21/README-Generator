// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `<img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />`;
  } else if (license === "gpl-3.0") {
    return `<img src="https://img.shields.io/badge/license-gpl--3.0-blue" alt="GPL-3.0 License" />`;
  } else if (license === "bsl-1.0") {
    return `<img src="https://img.shields.io/badge/license-bsl--1.0-blue" alt="BSL-1.0 License" />`;
  } else if (license === "unlicense") {
    return `<img src="https://img.shields.io/badge/license-unlicense-blue" alt="Unlicense" />`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  return `<a href= "https://choosealicense.com/licenses/${license.toLowerCase()}/">link to ${license} license</a>`;
  
}

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
${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
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
