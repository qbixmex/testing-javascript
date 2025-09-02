import { describe, test, expect } from "vitest";
import { calculateDiscount } from "../src/core.js";

describe('Tests on calculateDiscount()', () => {
  test('should return discounted price if given valid code', () => {
    expect(calculateDiscount(100, 'SAVE10')).toBe(90);
    expect(calculateDiscount(100, 'SAVE20')).toBe(80);
  });

  test('should handle non-numeric price', () => {
    expect(calculateDiscount('100', 'SAVE10')).toMatch(/invalid/i);
  });
 
  test('should handle negative numbers', () => {
    expect(calculateDiscount(-1, 'SAVE10')).toMatch(/invalid/i);
  });

  test('should handle falsy price', () => {
    expect(calculateDiscount(0, 'SAVE10')).toMatch(/invalid/i);
  });

  test('should handle no string discount code', () => {
    expect(calculateDiscount(100, 10)).toMatch(/invalid/i);
  });

  test('should handle invalid discount code', () => {
    expect(calculateDiscount(100, 'SUMMER50')).toMatch(/invalid/i);
  });
});
