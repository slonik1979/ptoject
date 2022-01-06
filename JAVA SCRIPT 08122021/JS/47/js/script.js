'use strict';

class Rectangle {
    constructor(height, width, www) {
        this.height = height;
        this.width = width;
        this.www = www;
    }
    calcArea() {
        return this.height * this.width * this.www;
    }
}

// const square = new Rectangle(5, 8, 10).calcArea();

// console.log(square);

class ColorRectangleText extends Rectangle {
    constructor(height, width, www, text, bgColor) {
        super(height, width, www);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text} , цвет: ${this.bgColor}`);
    }
} 


const div = new ColorRectangleText(2, 10, 25, 'Hello', 'red').calcArea();
div.showMyProps();

console.log(div);