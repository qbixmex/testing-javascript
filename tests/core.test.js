import { describe, test, expect } from "vitest";

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
});