const confirmTextInput = require('../cli.js');

describe('Confirm answer validation', () => {
    describe('Text longer than 3 characters', () => {
        it('should return and error with input longer than 3 characters', () => {
            const result = confirmTextInput('wookash');
            expect(result).toBe('Incorrect input. Text longer than 3 characters.');
        });
    });

    describe('Text shorter or equal to 3 characters', () => {
        it('should return true if entered text is less or equal to 3 characters', () => {
            const result = confirmTextInput('npm');
            expect(result).toBe(true);
        });
    });
});