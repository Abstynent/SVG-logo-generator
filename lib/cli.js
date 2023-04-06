// Import functions/classes
const { prompt } = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('../lib/shapes.js')

// Function to confirm user input that is no longer than 3 characters
const confirmTextInput = (input) => {
    return input.length <= 3 ? true : 'Incorrect input. Text is longer than 3 characters.';
}

// Func to create a file with rendered .svg file 
function writeToFile(fileName, data) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) =>
    err ? console.log(err) : console.log(`Generated ${fileName}.svg`)
    );
}

// Store all user prompts
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters long text:',
        validate: confirmTextInput
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Please enter text color name:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter shape color name:'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'Name your logo:',
        default: 'logo'
    }
]

// Declare class to take user input 
class CLI {
    constructor() {
        this.text = '';
        this.txtColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    run() { 
        prompt([...questions]).then(({ text, txtColor, shape, shapeColor, fileName }) => {
            // Switch case to run function based on user input
            switch(shape) {
                case 'Circle': 
                    const circle = new Circle(text, txtColor, shapeColor);
                    writeToFile(fileName, circle.render());
                    break;

                case 'Triangle': 
                    const triangle = new Triangle(text, txtColor, shapeColor);
                    writeToFile(fileName, triangle.render());
                    break;

                case 'Square':
                    const square = new Square(text, txtColor, shapeColor);
                    writeToFile(fileName, square.render());
                    break;
            }
        }).catch( err => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        })
    }
}

module.exports = { CLI, confirmTextInput }

