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

class Circle extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
    }
    render() {
        return `${this.frontSVG}<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />${this.endSVG}`

    }
};

class Triangle extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
    }
    render() {
        return `${this.frontSVG}<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />${this.endSVG}`
    }
};

class Square extends Shape {
    constructor(text, txtColor, shapeColor) {
        super(text, txtColor, shapeColor);
    }
    render() {
        return `${this.frontSVG}<rect x="75" y="25"  width="150" height="150" fill="${this.shapeColor}"/>${this.endSVG}`
    }
};

module.exports = {
    Circle, 
    Triangle, 
    Square
}