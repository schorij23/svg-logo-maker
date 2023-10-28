
# SVG Logo Maker

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This project draws a SVG logo from the command line using object-oriented programing

## Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installations](#installations)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)
* [Walkthrough](#walkthrough)
* [Screenshots](#screenshots)


## User Story
AS a freelance web developer<br>
I WANT to generate a simple logo for my projects<br>
SO THAT I don't have to pay a graphic designer<br>

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for text<br>
THEN I can enter up to three characters<br>
WHEN I am prompted for the text color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I am prompted for a shape<br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square<br>
WHEN I am prompted for the shape's color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I have entered input for all the prompts<br>
THEN an SVG file is created named `logo.svg`<br>
AND the output text "Generated logo.svg" is printed in the command line<br>
WHEN I open the `logo.svg` file in a browser<br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered<br>

## Installations
This application is run on a command line<br>
The links to the requirements are highlighted<br>
Install [node.js](https://nodejs.org/en) to run this application<br>
Run npm init and install npm inquirer on the command line [inquirer](https://www.npmjs.com/package/inquirer) <br>
Install jess on the command line [jess](https://www.npmjs.com/package/jess)<br>
then run node index.js to run the application

## Usage
This application is used to generate SVG Logos

## License
The project is licensed by the MIT License.

For more details, see [License Details](https://choosealicense.com/licenses/mit/)

## Testing
Tests run on this application use [jess](https://www.npmjs.com/package/jess)
<img src="./images/">

## Questions

  This is my contact information if there are any questions

  - GitHub User Name [GitHub](https://github.com/schorij23) 
  - Email address schorij23@gmail.com

## Walkthrough


## Screenshots
<div style="display: flex;">
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="125" cy="125" r="75" fill="green" />
    <text x="125" y="150" fill='white' font-size='60' text-anchor='middle'>SVG</text>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x="40" y="20" width="160" height="160" fill="red" />
    <text x="120" y="115" fill='white' font-size='60' text-anchor='middle'>SVG</text>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="155" fill='yellow' font-size='60' text-anchor='middle'>SVG</text>
  </svg>
</div>


