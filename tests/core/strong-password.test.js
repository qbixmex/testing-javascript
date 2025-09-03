import { describe, test, expect } from "vitest";
import { isStrongPassword } from "../../src/core.js";

describe('Tests on canDrive()', () => {
  test('should return false if password is less than minimun length', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });

  test('should return false if password does not contains one uppercase character', () => {
    expect(isStrongPassword('my_secret_password')).toBe(false);
  });

  test('should return false if password does not contains one lowercase character', () => {
    expect(isStrongPassword('MY_SECRET_PASSWORD')).toBe(false);
  });

  test('should return false if password does not contains one digit character', () => {
    expect(isStrongPassword('MySecretPassword')).toBe(false);
  });

  test('should return true if given password is valid', () => {
    expect(isStrongPassword('MySecret8Password')).toBe(true);
  });
});
