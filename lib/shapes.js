class Shape {
    constructor() {
        this.color = '';
    }

    setColor(colorChoice) {
        this.color = colorChoice;
    }

}

class Triangle extends Shape{
    render() {
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}' />`;
    }
}

class Circle extends Shape{
    render() {
        return '';
    }
}

class Square extends Shape {
    render() {
        return '';
    }
}

module.exports = {Triangle, Circle, Square};