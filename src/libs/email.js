import delay from 'delay';

/**
 * Validate an email address.
 * @param {string} email The email to validate
 * @returns {boolean} true if the email is valid, false otherwise
 */
export function isValidEmail(email) {
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return emailPattern.test(email);
}

/**
 * Send an email to a user.
 * @param {string} to The email to send.
 * @param {string} message The message to send.
 * @returns {Promise<void>}
 */
export async function sendEmail(to, message) {
  console.log(`Sending email to ${to}...`);
  console.log(`Message: ${message}`);
  await delay(3000);
}
