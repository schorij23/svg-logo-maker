// Shape class constructor
class Shape {
    constructor() {
        // Initialize text, text color and shape color
        this.textColor;
        this.shapeColor;
        this.text;   
    }
    // Set Text color based on user choice
    setTextColor(userChoice) {
        this.textColor = userChoice
    }
    // Set color based on user choice
    setShapeColor(userChoice) {
        this.shapeColor = userChoice;
    }
    setText(text) {
        this.text = text;
    }
}
// Class Triangle extending shape class
class Triangle extends Shape{
    render() {
        // Return an SVG polygon with points and fill color
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}' />
        <text x="140" y="120" fill='${this.textColor}'>${this.text}</text>
        </svg>`;
    }
}
// Class Circle extending shape class
class Circle extends Shape{
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width='300' height='200'>
        <circle cx='125' cy='125' r='75' fill='${this.shapeColor}' />
        <text x='125' y='125' fill='${this.textColor}'
        text-anchor='middle' alignment-baseline='middle'>${this.text}</text>
        </svg>` ;
    }
}
// Class Square extending shape class
class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="40" y="0" width="200" height="200" fill='${this.shapeColor}' />
        <text x="140" y="120" fill='${this.textColor}' font-size='24'>${this.text}</text>
      </svg>`;
    }
}
// Module to export the classes to other files
module.exports = {Triangle, Circle, Square};