import delay from 'delay';

/**
 * Simulate charging a credit card.
 * @param {{ creditCardNumber: number }} creditCardInfo The credit card information
 * @param {number} amount The amount to charge
 * @returns {Promise<{status: string}>}
 */
export async function charge(creditCardInfo, amount) {
  console.log(`Charging Credit Card: ${creditCardInfo.creditCardNumber}`);
  console.log(`Amount: ${amount}`);
  await delay(3000);
  return { status: 'success' };
}
