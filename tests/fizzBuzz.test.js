import { describe, test, expect } from "vitest";
import { fizzBuzz } from "../src/intro";

describe('Tests on fizzBuzz()', () => {
  test('should return Fizz if argument is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('should return Buzz if argument is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  test('should return FizzBuzz if argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  test('should return the number as string if is not divisivle by 3 or 5', () => {
    expect(fizzBuzz(2)).toBe('2');
  });
});
