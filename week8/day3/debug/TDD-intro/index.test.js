import { hello, fetchData } from './index.js';

describe('hello', () => {
    it('should return "Hello, World!"', () => {
        expect(hello()).toBe('Hello, World!');
    });

    it('should return a string', () => {
        expect(typeof hello()).toBe('string');
    });
});



test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});


