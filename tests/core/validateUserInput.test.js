import { describe, test, expect } from "vitest";
import { validateUserInput } from "../../src/core.js";

describe('Tests on validateUserInput()', () => {
  test('should return success if given valid input', () => {
    expect(validateUserInput('spiderman', 25)).toMatch(/successful/i);
  });

  test('should return an error if username is not a valid string', () => {
    expect(validateUserInput(100, 25)).toMatch(/invalid/i);
  });

  test('should return an error if username less than 3 characters', () => {
    expect(validateUserInput('sp', 25)).toMatch(/invalid/i);
  });

  test('should return an error if username is longer than 255', () => {
    expect(validateUserInput('a'.repeat(256), 30)).toMatch(/invalid/i);
  });

  test('should return an error if age is not a valid number', () => {
    expect(validateUserInput('spiderman', '25')).toMatch(/invalid/i);
  });

  test('should return an error if age lower than 18', () => {
    expect(validateUserInput('spiderman', 5)).toMatch(/invalid/i);
  });

  test('should return an error if age greater than 100', () => {
    expect(validateUserInput('spiderman', 100)).toMatch(/invalid/i);
  });

  test('should return an error if username and age are invalid', () => {
    expect(validateUserInput('', 25)).toMatch(/invalid username/i);
    expect(validateUserInput('spiderman', 0)).toMatch(/invalid age/i);
  });
});
