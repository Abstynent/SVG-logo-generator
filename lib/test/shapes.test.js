// import classes
const { Circle, Triangle, Square } = require('../shapes.js');

describe('Shapes', () => { 
// test class function render() for Circle
    describe('Circle', () => {
        it('should return code for .svg file to display a red circle with white "npm" text inside', () => {
            const circle = new Circle("npm", "red", "white");
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">npm</text></svg>`)
        })
    })
// test class function render() for Triangle
    describe('Triangle', () => {
        it('should return code for .svg file to display a red triangle with white "npm" text inside', () => {
            const circle = new Circle("npm", "red", "white");
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">npm</text></svg>`)
        })
    })
// test class function render() for Square
    describe('Circle', () => {
        it('should return code for .svg file to display a red circle with "npm" text inside', () => {
            const circle = new Circle("npm", "red", "white");
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25"  width="150" height="150" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">npm</text></svg>`)
        })
    })
})