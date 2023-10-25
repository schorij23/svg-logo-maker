// Create a Parent Class Shape
class Shape {
    constructor(shapeColor) {
        // Initialize shape color
        this.shapeColor = shapeColor;     
    }
}
// Create a Triangle Class the extends Shape
class Triangle extends Shape{
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        // Return an SVG polygon and fill color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}
// Create a Circle class that extends Shape
class Circle extends Shape{
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        // Return a SVG circle and fill color
        return `<circle cx="125" cy="125" r="75" fill="${this.shapeColor}" />` ;
    }
}
// Create a Square class that extends Shape
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor); 
    }
    render() {
        // Return a SVG square and fill color
        return `<rect x="40" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

module.exports = {Triangle, Circle, Square};