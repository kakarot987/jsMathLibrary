import { add, subtract, multiply, divide } from '../src/mathUtils.js';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(subtract(7, 4)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('divides two numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
