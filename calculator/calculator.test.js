// Import the calculator function
const calculator = require('./calculator');

// Test cases
describe('calculator function', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('divides by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
  });

  // Add more test cases as needed
});
