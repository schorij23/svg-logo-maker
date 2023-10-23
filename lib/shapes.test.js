const {Triangle, Square, Circle} = require("./shapes");

test('Triangle render test', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});


test('Square render test', () => {
    const shape = new Square();
    shape.setColor("");
    expect(shape.render()).toEqual('');  
});

test('Circle render test', () => {
    const shape = new Circle();
    shape.setColor("");
    expect(shape.render()).toEqual('');  
});
