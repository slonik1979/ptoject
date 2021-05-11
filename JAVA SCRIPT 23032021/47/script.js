'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea () {
        return this.height * this.width;
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(10, 8);

// console.log(square.calcArea());
// console.log(long.calcArea());

class ColoredRectangleWitText extends Rectangle { //наследуется из Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWitText (25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea);