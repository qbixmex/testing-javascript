import { describe, test, expect } from "vitest";
import { isPriceInRange } from "../src/core.js";

describe('Tests on isPriceInRange()', () => {
  test.each([
    { scenario: 'price < min', price: 9, result: false },
    { scenario: 'price = min', price: 10, result: true },
    { scenario: 'price between min and max', price: 50, result: true },
    { scenario: 'price = max', price: 100, result: true },
    { scenario: 'price > max', price: 101, result: false },
  ])('should return $result when $scenario', ({ price, result }) => {
    expect(isPriceInRange(price, 10, 100)).toBe(result);
  });
});
