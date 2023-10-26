const fs = require('fs');
const inquirer = require ('inquirer');
const {Triangle, Square, Circle} = require("./lib/shapes");

// Function to prompt user for SVG info
function svgInfoPrompt() {
    // Prompt for color, shape and text
    return inquirer.prompt([
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the Text Color keyword (Or hexadecimal number',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select the shape you want to use',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color keyword (Or hexadecimal number',
        },
        {
          type: 'imput',
          name: 'textInput',
          message: 'Enter text to add to the logo'
        }
      ]);
  }
  // Main function this is where your program starts executing
  async function main() {
    // Prompt for SVG info wait for svgInfoPrompt()
    const svgInfo = await svgInfoPrompt();
    // Destructuring to get info from svgInfo
    const { textColor, shape, shapeColor, textInput } = svgInfo;
    // set file name for SVG info
    const fileName = 'logo.svg';
    // Set default fontsize
    let fontSize = 60;
    // Set default text positioning
    let textX = 90;
    let textY = 155;
    // Set Changes based on the shape choosen
    if(shape === "triangle") {
      shapeChoice = new Triangle(shapeColor)
    } else if (shape === "circle") {
      shapeChoice = new Circle(shapeColor)
      textX = 65;
      textY = 150;
    }  else {
      shapeChoice = new Square(shapeColor)
      fontSize = 60;
      textX = 60;
      textY = 115;
    } 
      //Renders the shape to SVG content
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeChoice.render()}
      <text x="${textX}" y="${textY}" fill='${textColor}' font-size='${fontSize}'>${textInput}</text>
      </svg>`;
      
      //Write the SVG content to file by filename
      svgWriteFile(svgContent, fileName);
  }
  
  
  // Function to write SVG file
function svgWriteFile (svgContent, fileName) {
    // Write the SVG content to the specified file
    fs.writeFile(fileName,svgContent, function(err) {
        // if there is an error log the error message
        if (err) {
            console.error('SVG file error', err);
        // If the file was saved log the message with the file name
        } else {
            console.log("Generated", fileName);
        }
    });
}
// Calling out the main function
main();
  