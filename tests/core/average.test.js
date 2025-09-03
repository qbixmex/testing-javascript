import { describe, test, expect } from "vitest";
import { calculateAverage } from "../../src/intro";

describe('Tests on calculateAverage()', () => {
  test('should return NaN if given an empty array', () => {
    const result = calculateAverage([]);
    expect(result).toBe(NaN);
  });

  test('should calculate the average of an array with single element', () => {
    const testCase = [1];
    const result = calculateAverage(testCase);
    expect(result).toBe(1);
  });

  test('should calculate the average of an array with two elements', () => {
    const testCase = [10, 20];
    const result = calculateAverage(testCase);
    expect(result).toBe(15);
  });

  test('should calculate the average of an array with three elements', () => {
    const testCase = [10, 20, 30];
    const result = calculateAverage(testCase);
    expect(result).toBe(20);
  });
});