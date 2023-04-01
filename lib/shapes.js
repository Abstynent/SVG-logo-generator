class Shape {
    constructor(text, color, fileName) {
        this.text = text;
        this.color = color;
        this.width = 300;
        this.height = 200;
        this.fileName = fileName;
    }
    render() {
    }
}

class Circle extends Shape {
    constructor(text, color, fileName) {
        super(text, color, fileName);
    }
    render() {
        console.log('circle')
    }

};

// class Triangle extends Shape {
//     render() {
//         console.log('triangle')
//     }

// };

// class Square extends Shape {
//     render() {
//         console.log('square')
//     }

// };

module.exports = Circle;