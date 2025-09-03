import { vi, describe, test, expect } from 'vitest';
import { login } from '../../src/mocking';
import security from '../../src/libs/security';
import { sendEmail } from '../../src/libs/email';

vi.mock('../../src/libs/email');

describe('Tests on login()', () => {
  /** @type string */
  const email = 'name@domain.com';

  test('should email the one-time login code', async () => {
    const spy = vi.spyOn(security, 'generateCode');

    await login(email);

    /** @type number */
    const securityCode = spy.mock.results[0].value;

    expect(sendEmail).toHaveBeenCalledWith(email, securityCode.toString());
  });
});