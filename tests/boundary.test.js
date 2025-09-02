import { describe, test, expect } from "vitest";
import { isPriceInRange } from "../src/core.js";

describe('Tests on isPriceInRange()', () => {
  test('should return false when the price is outside the range', () => {
    expect(isPriceInRange(9, 10, 100)).toBe(false);
    expect(isPriceInRange(101, 10, 100)).toBe(false);
  });

  test('should return true when the price is equals to the min or the max', () => {
    expect(isPriceInRange(10, 10, 100)).toBe(true);
    expect(isPriceInRange(100, 10, 100)).toBe(true);
  });

  test('should return true when the price within the range', () => {
    expect(isPriceInRange(50, 10, 100)).toBe(true);
  });
});
