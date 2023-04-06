// declare parent class Shape to hold values that are the same for each children class
class Shape {
    constructor(text, txtColor, shapeColor) {
        this.text = text;
        this.txtColor = txtColor;
        this.shapeColor = shapeColor;
        this.width = 300;
        this.height = 200;
        this.frontSVG = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        this.endSVG = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text></svg>`;
    }
}

// Declare class Circle with function render() to receive user input and generate .svg file
class Circle extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
    }
    render() {
        return `${this.frontSVG}<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />${this.endSVG}`

    }
};

// Declare class Triangle with function render() to receive user input and generate .svg file
class Triangle extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
        // text position set to be lower for triangle
        this.endSVG = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text></svg>`
    }
    render() {
        return `${this.frontSVG}<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />${this.endSVG}`
    }
};

// Declare class Square with function render() to receive user input and generate .svg file
class Square extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
    }
    render() {
        return `${this.frontSVG}<rect x="75" y="25"  width="150" height="150" fill="${this.shapeColor}"/>${this.endSVG}`
    }
};

// Export 
module.exports = {
    Circle, 
    Triangle, 
    Square
}