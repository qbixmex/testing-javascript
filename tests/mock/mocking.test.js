import { vi, describe, test, expect } from "vitest";

describe('Test on Mocks', () => {
  test('Should return a mock value', () => {
    const greet = vi.fn();

    greet.mockReturnValue('Hello');

    const result = greet();

    expect(result).toMatch(/hello/i);
    expect(greet).toHaveBeenCalled();
    expect(greet).toHaveBeenCalledOnce();
  });

  test('Should return a mock promise value', async () => {
    const createResource = vi.fn();

    createResource.mockResolvedValue('Resource created successfully');

    const result = await createResource();

    expect(result).toMatch(/successfully/i);
    expect(createResource).toHaveBeenCalled();
    expect(createResource).toHaveBeenCalledTimes(1);
    expect(createResource).toHaveBeenCalledOnce();
  });

  test('Should return a mock with logic', () => {
    const greet = vi.fn();
    const name = 'Daniel';

    greet.mockImplementation((name) => `Hello, ${name}`);

    const result = greet(name);

    expect(result).toMatch(/hello/i);
    expect(greet).toHaveBeenCalledWith(name);
  });
});
