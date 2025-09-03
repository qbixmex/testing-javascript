import { vi, describe, test, expect } from "vitest";
import { renderPage } from "../../src/mocking";
import { trackPageView } from "../../src/libs/analytics";

vi.mock('../../src/libs/analytics');

describe('Test on renderPage()', () => {
  test('should return correct content', async () => {
    const result = await renderPage();
    expect(result).toMatch(/content/i);
  });

  test('should call analytics', async () => {
    const result = await renderPage();
    expect(trackPageView).toHaveBeenCalledWith('/home');
  });
});
