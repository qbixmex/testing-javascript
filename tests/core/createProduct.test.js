import { describe, test, expect } from "vitest";
import { createProduct } from "../../src/core.js";

describe('Tests on canDrive()', () => {
  test('should return a success message', () => {
    const result = createProduct({ name: 'Tablet', price: 500 });

    expect(result.success).toBe(true);
    expect(result.message).toMatch(/successfully/i);
  });

  test('should return an error message if empty name given', () => {
    const result = createProduct({ name: '', price: 500 });
    expect(result.error.code).toMatch(/invalid/i);
    expect(result.error.message).toMatch(/missing/i);
  });

  test.each([
    { scenario: 'zero', name: 'Laptop', price: 0 },
    { scenario: 'negative', name: 'Mouse', price: -1 },
  ])('should return an error message if price is $scenario', ({ name, price }) => {
    const result = createProduct({ name, price });
    expect(result.error.code).toMatch(/invalid/i);
    expect(result.error.message).toMatch(/missing/i);
  });
});
