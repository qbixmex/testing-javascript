import { describe, test, expect } from "vitest";
import { canDrive } from "../src/core.js";

describe('Tests on canDrive()', () => {
  test('should return true for min age in the US', () => {
    expect(canDrive(16, 'US')).toBe(true);
  });

  test('should return true for eligible in the US', () => {
    expect(canDrive(16, 'US')).toBe(true);
  });

  test('should return false for underage in the US', () => {
    expect(canDrive(14, 'US')).toBe(false);
  });

  test('should return true for min age in the UK', () => {
    expect(canDrive(17, 'UK')).toBe(true);
  });

  test('should return true for eligible in the UK', () => {
    expect(canDrive(18, 'UK')).toBe(true);
  });

  test('should return error for invalid country code', () => {
    expect(canDrive(20, 'CA')).toMatch(/invalid/i);
  });

  test('should return false for underage in the UK', () => {
    expect(canDrive(16, 'UK')).toBe(false);
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
