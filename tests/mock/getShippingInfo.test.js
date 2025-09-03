import { vi, describe, test, expect } from "vitest";
import { getShippingInfo } from "../../src/mocking";
import { getShippingQuote } from "../../src/libs/shipping";

vi.mock('../../src/libs/shipping');

describe('Test on getShippingInfo()', () => {
  test('should return shipping unavailable if quote cannot be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);

    const result = getShippingInfo('Los Angeles');

    expect(result).toMatch(/unavailable/i);
  });

  test('should return shipping info if quote can be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 10, estimatedDays: 2 });

    const result = getShippingInfo('New York');

    expect(result).toMatch(/shipping cost: \$10 \(2 days\)/i);
  });
});
