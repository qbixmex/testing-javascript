import { describe, test, expect } from "vitest";
import { max } from "../src/intro";

describe('max', () => {
  test('should return the first argument if it is greater', () => {
    const a = 2;
    const b = 1;

    const result = max(a, b);

    expect(result).toBe(2);
  });

  test('should return the second argument if it is greater', () => {
    const a = 1;
    const b = 2;

    const result = max(a, b);

    expect(result).toBe(2);
  });
  
  test('should return the first if arguments are equals', () => {
    const a = 2;
    const b = 2;

    const result = max(a, b);

    expect(result).toBe(2);
  });
});