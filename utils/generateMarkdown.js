function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  return `[![License](https://img.shields.io/badge/License-${license.badge}-blue.svg)](${license.link})`
}

function renderLicenseLink(license) {
  if (license === "none") {
    return ""
  }
  return '- [License](#license)' 
}

function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  return `## License
  [${license.name}](${license.link})`
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
Check out my [Github](https://github.com/${data.github})
Send me an email with your questions at [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
