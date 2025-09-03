import { describe, test, expect } from "vitest";
import { fetchData } from "../src/core.js";

describe('Tests on fetchData()', () => {
  test('should return a promise that will resolve to a numbers array', async () => {
    const result = await fetchData();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should return a promise that will reject to a numbers array', async () => {
    try {
      await fetchData({ fail: true });
    } catch(error) {
      expect(error).toHaveProperty('reason');
      expect(error.reason).toMatch(/fail/i);
    }
  });
});