// Shape class constructor
class Shape {
    constructor(shapeColor) {
        // Initialize text, text color and shape color
        this.shapeColor = shapeColor;     
    }
}
// Class Triangle extending shape class
class Triangle extends Shape{
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        // Return an SVG polygon with points and fill color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}
// Class Circle extending shape class
class Circle extends Shape{
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<circle cx="125" cy="125" r="75" fill="${this.shapeColor}" />` ;
    }
}
// Class Square extending shape class
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor); 
    }
    render() {
        return `<rect x="40" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}
// Module to export the classes to other files
module.exports = {Triangle, Circle, Square};