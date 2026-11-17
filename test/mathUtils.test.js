import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('math utilities', () => {
  test('adds integers and negative numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-4, 2)).toBe(-2);
  });

  test('adds decimal values', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('subtracts values', () => {
    expect(subtract(7, 4)).toBe(3);
    expect(subtract(-3, -5)).toBe(2);
  });

  test('multiplies values', () => {
    expect(multiply(3, 5)).toBe(15);
    expect(multiply(-2, 4)).toBe(-8);
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  test('divides values', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-9, 3)).toBe(-3);
    expect(divide(1, 4)).toBe(0.25);
  });

  test('rejects a zero divisor, including negative zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    expect(() => divide(5, -0)).toThrow('Cannot divide by zero');
  });
});
