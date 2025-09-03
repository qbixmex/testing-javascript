import { trackPageView } from './libs/analytics';
import { getExchangeRate } from './libs/currency';
import { isValidEmail, sendEmail } from './libs/email';
import { charge } from './libs/payment';
import security from './libs/security';
import { getShippingQuote } from './libs/shipping';

/**
 * Get the price in a specific currency.
 * @param {number} price USD price
 * @param {number} currency currency code
 * @example```javascript
 * getPriceInCurrency(10, 'AUD') // 15
 * ```
 * @returns {number} price in currency
 */
export function getPriceInCurrency(price, currency) {
  const rate = getExchangeRate('USD', currency);
  return price * rate;
}

/**
 * Get shipping info for a destination.
 * @param {string} destination destination country code
 * @example```javascript
 * getShippingInfo('US') // 'Shipping Cost: $5 (5 Days)'
 * ```
 * @returns {string} shipping info
 */
export function getShippingInfo(destination) {
  const quote = getShippingQuote(destination);
  if (!quote) return 'Shipping Unavailable';
  return `Shipping Cost: $${quote.cost} (${quote.estimatedDays} Days)`;
}

/**
 * Render the home page.
 * @returns {Promise<string>} HTML content
 */
export async function renderPage() {
  trackPageView('/home');

  return '<div>content</div>';
}

// Exercise
export async function submitOrder(order, creditCard) {
  const paymentResult = await charge(creditCard, order.totalAmount);

  if (paymentResult.status === 'failed')
    return { success: false, error: 'payment_error' };

  return { success: true };
}

// Lesson: Partial mocking
export async function signUp(email) {
  if (!isValidEmail(email)) return false;

  await sendEmail(email, 'Welcome aboard!');

  return true;
}

// Lesson: Spying on functions
export async function login(email) {
  const code = security.generateCode();

  await sendEmail(email, code.toString());
}

// Lesson: Mocking dates
export function isOnline() {
  const availableHours = [8, 20];
  const [open, close] = availableHours;
  const currentHour = new Date().getHours();

  return currentHour >= open && currentHour <= close;
}

// Exercise
export function getDiscount() {
  const today = new Date();
  const isChristmasDay = today.getMonth() === 11 && today.getDate() === 25;
  return isChristmasDay ? 0.2 : 0;
}
