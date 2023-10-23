const fs = require('fs');
const inquirer = require ('inquirer');
const {Triangle, Square, Circle} = require("./lib/shapes");

// Function to prompt for SVG info
function svgInfoPrompt() {
    // This uses the inquirer library to prompt the user to input data
    return inquirer.prompt([
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the Text Color(regular colors like blue, red, purple etc...)',
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
          message: 'Enter the shape color (regular colors like blue, red, purple etc...)',
        },
        {
          type: 'imput',
          name: 'text',
          message: 'Enter text to add to the logo'
        }
      ]);
  }
  // Main function this is where your program starts executing
  async function main() {
    // Prompt for SVG info wait for svgInfoPrompt()
    const svgInfo = await svgInfoPrompt();
    // Get shape and shape color fro svgInfo
    const { textColor, shape, shapeColor, text } = svgInfo;
    // set file name for SVG info
    const fileName = 'logo.svg';
    // Create a shape and set the color
    let shapeChoice = createShape(shape, shapeColor);
    // Check if a shape was created
    if (shapeChoice) {
        // Set the color
        shapeChoice.setShapeColor(shapeColor);
        shapeChoice.setTextColor(textColor);
        shapeChoice.setText(text);
        //Renders the shape to SVG content
      const svgContent = shapeChoice.render();
      //Write the SVG content to file by filename
      svgWriteFile(svgContent, fileName);
    } else {
      // if the shape was not created log error
      console.log('Invalid shape');
    }
  }
  // Function to make and returns an instance of a shape object based on the prompt
  function createShape(shape, shapeColor) {
    const shapeTypes = {
      circle: Circle,
      triangle: Triangle,
      square: Square,
    };
    // This checks to make sure the shape exists in the shapeTypes object
    const ShapeType = shapeTypes[shape];
     // This makes a new instance of the shape and the color
    if (ShapeType) {
      return new ShapeType(shapeColor);
    } else {
      // if the shape is not circle,square or triangle return null
      return null;
    }
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
  