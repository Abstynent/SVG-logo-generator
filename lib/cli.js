const { prompt } = require('inquirer');
const Circle = require('./lib/shapes.js');

const confirmTextInput = async (input) => {
    return input.length <= 3 ? true : 'Incorrect input. Text longer than 3 characters.';
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
        choices: ['Circle', 'Square', 'Triangle']
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
        return prompt([...questions]).then(({ text, color, shape, fileName }) => {
            switch(shape) {
                case 'Circle': 
                    var logo = new Circle(text, color, fileName);
                    break;
                case 'Triangle': 
                    var logo = new Triangle(text, color, fileName);
                    break;
                case 'Square':
                    var logo = new Square(text, color, fileName);
                    break;
            }

            logo.render();
        }).catch( err => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        })
    }
}

module.exports = CLI;
