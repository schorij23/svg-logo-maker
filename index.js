const fs = require('fs');
const inquirer = require ('inquirer');
const {Triangle, Square, Circle} = require("./lib/shapes");

// Prompt for SVG info
function svgInfoPrompt() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the Text Color',
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
          message: 'Enter the shape color',
        },
      ]);
  }

  async function main() {
    const svgInfo = await svgInfoPrompt();
    const { shape, shapeColor } = svgInfo;
    const fileName = 'svglogo.svg';
  
    let shapeInstance = createShape(shape, shapeColor);
  
    if (shapeInstance) {
      const svgContent = shapeInstance.render();
      svgWriteFile(svgContent, fileName);
    } else {
      console.log('Invalid shape');
    }
  }
  
  function createShape(shape, shapeColor) {
    switch (shape) {
      case 'circle':
        return new Circle(shapeColor);
      case 'triangle':
        return new Triangle(shapeColor);
      case 'square':
        return new Square(shapeColor);
      default:
        return null;
    }
  }
function svgWriteFile (svgContent, fileName) {
    fs.writeFile(fileName,svgContent, function(err) {
        if (err) {
            console.error('SVG file error', err);
        } else {
            console.log("SVG file saved", fileName);
        }
    });
}

main();
  