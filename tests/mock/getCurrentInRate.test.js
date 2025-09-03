import { vi, describe, test, expect } from "vitest";
import { getPriceInCurrency } from "../../src/mocking";
import { getExchangeRate } from "../../src/libs/currency";

vi.mock('../../src/libs/currency');

describe('Test on getPriceInCurrency()', () => {
  test('should return price in currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, 'AUD');

    expect(price).toBe(15);
  });
});
