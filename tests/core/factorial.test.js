import { describe, test, expect } from "vitest";
import { factorial } from "../../src/intro";

describe('Tests on factorial()', () => {
  test('should return 1 if given 0', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  test('should return 1 if given 1', () => {
    const result = factorial(1);
    expect(result).toBe(1);
  });

  test('should return 2 if given 2', () => {
    const result = factorial(2);
    expect(result).toBe(2);
  });

  test('should return 6 if given is 3', () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });

  test('should return 24 if given is 4', () => {
    const result = factorial(4);
    expect(result).toBe(24);
  });

  test('should return undefined if given number is negative', () => {
    const result = factorial(-1);
    expect(result).toBeUndefined();
  });
});