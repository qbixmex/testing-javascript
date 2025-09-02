import { describe, test, expect } from "vitest";
import { isValidUsername } from "../src/core.js";

describe('Tests on isPriceInRange()', () => {
  test('should returns true if username length is withing the range', () => {
    expect(isValidUsername('ironman')).toBe(true);
    expect(isValidUsername('spiderman', 3, 10)).toBe(true);
  });
  test('should returns false if username length is less than minLength', () => {
    expect(isValidUsername('a'.repeat(4))).toBe(false);
    expect(isValidUsername('a'.repeat(2), 3, 8)).toBe(false);
  });
  test('should returns false if username length is greater than maxLength', () => {
    expect(isValidUsername('a'.repeat(16))).toBe(false);
    expect(isValidUsername('a'.repeat(6), 3, 5)).toBe(false);
  });
  test('should returns false for empty username', () => {
    expect(isValidUsername('')).toBe(false);
  });
  test('should returns false for invalid type input', () => {
    expect(isValidUsername()).toBe(false);
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(15)).toBe(false);
  });
});
