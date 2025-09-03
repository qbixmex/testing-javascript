import { vi, describe, test, expect, beforeEach } from 'vitest';
import { signUp } from '../../src/mocking';
import { sendEmail } from '../../src/libs/email';

vi.mock('../../src/libs/email', async (importOriginal) => {
  const originalModule = await importOriginal();
  return {
    ...originalModule,
    sendEmail: vi.fn(), // << Only this module will mocked
  }
});

describe('Tests on signUp()', () => {
  const email = 'ironman@marvel.com';

  // beforeEach(() => {
    //? vi.mocked(sendEmail).mockClear(); // << Option 1
    //? vi.clearAllMocks(); // << Option 2
  // });

  test('should return false if email is not valid', async () => {
    const result = await signUp('abc');
    expect(result).toBe(false);
  });

  test('should return true if email is valid', async () => {
    const result = await signUp(email);
    expect(result).toBe(true);
  });

  test('should send the welcome email if email is valid', async () => {
    await signUp(email);
    
    expect(sendEmail).toHaveBeenCalledOnce();
    
    const [emailCall, messageCall] = vi.mocked(sendEmail).mock.calls[0];

    expect(emailCall).toBe(email);
    expect(messageCall).toMatch(/welcome/i);
  });
});