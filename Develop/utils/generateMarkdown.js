// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case '':
      return '';
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green';
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue';
    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-blue';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case '':
      return '';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  else {
    return `
  Copyright (c) Thang Nguyen. All rights reserved. 
  Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  ![License badge](${renderLicenseBadge(data.license)})
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions?](#questions)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${renderLicenseSection(data.license)}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Questions?
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;




