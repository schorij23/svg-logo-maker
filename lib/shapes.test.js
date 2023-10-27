const {Triangle, Square, Circle} = require("./shapes");
    // Test the render method of the Triangle class
    test('Triangle render test', () => {
        const shape = new Triangle("blue");
        // Check if the rendered SVG matches the expected SVG string
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);     
});
    // Test the render method of the Circle class
    test('Circle render test', () => {
        const shape = new Circle("green");
        // Check if the rendered SVG matches the expected SVG string
        expect(shape.render()).toEqual(`<circle cx="125" cy="125" r="75" fill="green" />`);
    });
    // Test the render method of the Square class
    test('Square render test', () => {
        const shape = new Square("red");
        // Check if the rendered SVG matches the expected SVG string
        expect(shape.render()).toEqual(`<rect x="40" y="20" width="160" height="160" fill="red" />`);
    });

