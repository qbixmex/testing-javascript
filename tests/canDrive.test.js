import { describe, test, expect } from "vitest";
import { canDrive } from "../src/core.js";

describe('Tests on canDrive()', () => {
  test.each([
    { age: 15, countryCode: 'US', result: false },
    { age: 16, countryCode: 'US', result: true },
    { age: 17, countryCode: 'US', result: true },
    { age: 16, countryCode: 'UK', result: false },
    { age: 17, countryCode: 'UK', result: true },
    { age: 18, countryCode: 'UK', result: true },
  ])('should return $result for $age, $countryCode', ({ age, countryCode, result }) => {
    expect(canDrive(age, countryCode)).toBe(result);
  });

  test('should return an error if country code is invalid', () => {
    expect(canDrive(16, 'MX')).toMatch(/invalid/i);
  });

  test('should return false if age is not a number', () => {
    expect(canDrive('16', 'US')).toBe(false);
  });

  test('should return false if country code is not a string', () => {
    expect(canDrive('16', 100)).toBe(false);
  });

  test('should not drive if age is bigger than 100 years', () => {
    expect(canDrive(100, 'US')).toBe(false);
    expect(canDrive(100, 'UK')).toBe(false);
  });
});
