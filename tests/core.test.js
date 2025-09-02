import { describe, test, expect } from "vitest";
import { getCoupons } from "../src/core";

describe('Tests on core', () => {
  test('should contains part of the text', () => {
    const result = 'The requested file was not found !';
    // Loose (Too general)
    //? expect(result).toBeDefined();

    // Tight (Too specific)
    //? expect(result).toBe('The requested file was not found !');

    // Regular Expression
    expect(result).toMatch(/not found/i);
  });
 
  test('should contains 7, 4, 8 numbers', () => {
    const result = [8, 7, 4];
    // Loose (Too general)
    //? expect(result).toBeDefined();

    // Tight (Too specific)
    //? expect(result).toEqual([1, 2, 3]);

    // Array Containing
    expect(result).toEqual(expect.arrayContaining([7, 4, 8]));
  });

  test('should be greater than 0', () => {
    const result = [55, 18, 75];
    //? Too Tight
    // expect(result).toHaveLength(3);

    expect(result.length).toBeGreaterThan(0);
  });

  test('should match object', () => {
    const result = { id: 1, language: 'javascript' };
    //? Too Tight
    //? expect(result).toEqual({ language: 'javascript' });

    expect(result).toMatchObject({ language: 'javascript' });
    expect(result).toHaveProperty('language');
    expect(typeof result.language).toBe('string');
  });

  test('should returns an array of coupons', () => {
    const coupons = getCoupons();
    expect(coupons.length).toBeGreaterThan(0);
  });

  test('should returns an array of coupons', () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
  });

  test('should return an array with valid coupon codes', () => {
    const coupons = getCoupons();

    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty('code');
      expect(typeof coupon.code).toBe('string');
      expect(coupon.code).toBeTruthy();
    });
  });

  test('should return an array with valid discounts', () => {
    const coupons = getCoupons();

    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty('discount');
      expect(typeof coupon.discount).toBe('number');
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});