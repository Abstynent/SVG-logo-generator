const { prompt } = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('../lib/shapes.js')

const confirmTextInput = (input) => {
    return input.length <= 3 ? true : 'Incorrect input. Text longer than 3 characters.';
}

function writeToFile(fileName, data) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) =>
    err ? console.log(err) : console.log(`Generated ${fileName}.svg`)
    );
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters long text:',
        validate: confirmTextInput
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter color name:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'Name your logo:',
        default: 'logo'
    }
]

class CLI {
    constructor() {
        this.text = '';
        this.color = '';
        this.shape = '';
    }
    run() { 
        prompt([...questions]).then(({ text, color, shape, fileName }) => {
            switch(shape) {
                case 'Circle': 
                    const circle = new Circle(text, color);
                    writeToFile(fileName, circle.render());
                    break;

                case 'Triangle': 
                    const triangle = new Triangle(text, color);
                    writeToFile(fileName, triangle.render());
                    break;

                case 'Square':
                    const square = new Square(text, color);
                    writeToFile(fileName, square.render());
                    break;
            }
        }).catch( err => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        })
    }
}

module.exports = CLI;
exports.confirmTextInput = confirmTextInput;

