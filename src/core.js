/**
 * Returns a list of available coupons.
 * @returns {{ code: string; discount: number; }[]} Array of coupon objects.
 */
export function getCoupons() {
  return [
    { code: 'SAVE20NOW', discount: 0.2 },
    { code: 'DISCOUNT50OFF', discount: 0.5 },
    { code: 'SPRING20OFF', discount: 0.2 },
  ];
}

/**
 * Calculates the discounted price based on the provided discount code.
 * @param {number} price The original price of the item.
 * @param {number} discountCode The discount code to apply.
 * @example```javascript
 * calculateDiscount(100, 'SAVE10') // returns 90
 * calculateDiscount(200, 'SAVE20') // returns 160
 * calculateDiscount('100', 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(0, 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(-1, 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(100, 10) // returns 'Invalid price'
 * calculateDiscount(100, 'SUMMER50') // returns 'Invalid discount code'
 * ```
 * @returns {number|string} The discounted price or an error message.
 */
export function calculateDiscount(price, discountCode) {
  if (typeof price !== 'number' || price <= 0) {
    return 'Invalid price';
  }

  if (typeof discountCode !== 'string') {
    return 'Invalid discount code';
  }

  let discount = 0;

  switch (discountCode) {
    case 'SAVE10':
      discount = 0.1;
      break;
    case 'SAVE20':
      discount = 0.2;
      break;
    default:
      return 'Invalid discount code';
  }

  return price - price * discount;
}

// Exercise: Positive and negative testing
/**
 * 
 * @param {string} username The username to validate.
 * @param {number} age The age to validate.
 * @example```javascript
 * validateUserInput('spiderman', 25) // returns 'Validation successful'
 * validateUserInput(100, 25) // returns 'Invalid username';
 * validateUserInput('sp', 25) // returns 'Invalid username';
 * validateUserInput('spiderman', '25') // returns 'Invalid age';
 * validateUserInput('spiderman', 5) // returns 'Invalid age';
 * ```
 * @returns {string} Validation result message.
 */
export function validateUserInput(username, age) {
  let errors = [];

  if (
    typeof username !== 'string'
    || username.length < 3
    || username.length > 255
  ) {
    errors.push('Invalid username');
  }

  if (
    typeof age !== 'number'
    || age < 18
    || age >= 100
  ) {
    errors.push('Invalid age');
  }

  return errors.length === 0 ? 'Validation successful' : errors.join(', ');
}

/**
 * Checks if a price is within a specified range (inclusive).
 * @param {number} price The price to check.
 * @param {number} min The minimum price in the range.
 * @param {number} max The maximum price in the range.
 * @example```javascript
 * isPriceInRange(50, 10, 100) // returns true
 * isPriceInRange(9, 10, 100) // returns false
 * isPriceInRange(101, 10, 100) // returns false
 * ```
 * @returns {boolean} True if the price is within the range, false otherwise.
 */
export function isPriceInRange(price, min, max) {
  return price >= min && price <= max;
}

/**
 * Validates if a username meets the length requirements.
 * @param {string} username The username to validate.
 * @param {number} minLength The minimum length of the username (default is 5).
 * @param {number} maxLength The maximum length of the username (default is 15).
 * @example```javascript
 * isValidUsername('ironman') // returns true
 * isValidUsername('spiderman', 3, 10) // returns true
 * isValidUsername('us') // returns false
 * isValidUsername('') // returns false
 * isValidUsername('thisisaverylongusername') // returns false
 * isValidUsername(null) // returns false
 * isValidUsername(undefined) // returns false
 * isValidUsername() // returns false
 * isValidUsername(10) // returns false
 * ```
 * @returns {boolean} True if the username is valid, false otherwise.
 */
export function isValidUsername(username, minLength = 5, maxLength = 15) {
  if (typeof username !== 'string') return false;
  return username.length >= minLength && username.length <= maxLength;
}

// Exercise: Boundary testing
export function canDrive(age, countryCode) {
  const legalDrivingAge = {
    US: 16,
    UK: 17,
  };

  if (!legalDrivingAge[countryCode]) {
    return 'Invalid country code';
  }

  return age >= legalDrivingAge[countryCode];
}

// Lesson: Testing asynchronous code
export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    });
  });
}

// Lesson: Setup and teardown
export class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Additional exercises
export function createProduct(product) {
  if (!product.name)
    return {
      success: false,
      error: { code: 'invalid_name', message: 'Name is missing' },
    };

  if (product.price <= 0)
    return {
      success: false,
      error: { code: 'invalid_price', message: 'Price is missing' },
    };

  return { success: true, message: 'Product was successfully published' };
}

export function isStrongPassword(password) {
  // Check the length of the password (minimum 8 characters)
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit (number)
  if (!/\d/.test(password)) {
    return false;
  }

  // If all criteria are met, consider the password strong
  return true;
}
