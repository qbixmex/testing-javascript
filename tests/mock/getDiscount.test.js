import { vi, test, expect, describe } from 'vitest';
import { getDiscount } from '../../src/mocking';

describe('Tests on getDiscount()', () => {
  test('should return 0.2 (20%) on Christmas day', () => {
    vi.setSystemTime('1979-12-25 00:01');
    expect(getDiscount()).toBe(0.2);

    vi.setSystemTime('2000-12-25 23:59');
    expect(getDiscount()).toBe(0.2);
  });

  test('should return 0 on any other days', () => {
    vi.setSystemTime('1492-08-12 00:01');
    expect(getDiscount()).toBe(0);

    vi.setSystemTime('2002-12-24 23:59');
    expect(getDiscount()).toBe(0);
  });
});
