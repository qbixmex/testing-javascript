import * as vi from "vitest";

vi.describe('Test Suite', () => {
  vi.beforeAll(() => {
    console.log("Before All Called");
  });

  vi.beforeEach(() => {
    console.log("Before Each Called");
  });

  vi.afterEach(() => {
    console.log("After Each Called");
  });

  vi.afterAll(() => {
    console.log("After All Called");
  });

  vi.test('test case 1', () => {});
  vi.test('test case 2', () => {});
});
