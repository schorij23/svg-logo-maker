const {Triangle, Square, Circle} = require("./shapes");


    test('Triangle render test', () => {
        const shape = new Triangle("blue");
        // shape.setShapeColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);     
});

    test('Circle render test', () => {
        const shape = new Circle("green");
        expect(shape.render()).toEqual(`<circle cx="125" cy="125" r="75" fill="green" />`);
    });

    test('Square render test', () => {
        const shape = new Square("red");
        expect(shape.render()).toEqual(`<rect x="40" y="20" width="160" height="160" fill="red" />`);
    });

