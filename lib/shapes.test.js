const {Triangle, Square, Circle} = require("./shapes");

test('Triangle render test',  function () {
const shape = new Triangle();
shape.setShapeColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});


test('Square render test', function() {
    const shape = new Square();
    shape.setShapeColor("");
    expect(shape.render()).toEqual('');  
});

test('Circle render test', function() {
    const shape = new Circle();
    shape.setShapeColor("");
    expect(shape.render()).toEqual('');  
});
