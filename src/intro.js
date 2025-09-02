/**
 * Returns the greater of two numbers
 * 
 * @param {number} a The first number to compare
 * @param {number} b The second number to compare
 * @example ```javascript
 * max(3, 5) // returns 5
 * max(10, 7) // returns 10
 * ```
 * @returns The greater of the two numbers
 */
export function max(a, b) {
  return (a > b) ? a : b;
}

/**
 * Returns "Fizz", "Buzz", "FizzBuzz", or the number as a string
 * 
 * @param {number} n The number to evaluate
 * @example ```javascript
 * fizzBuzz(3) // returns "Fizz"
 * fizzBuzz(5) // returns "Buzz"
 * fizzBuzz(15) // returns "FizzBuzz"
 * fizzBuzz(7) // returns "7"
 * ```
 * @returns {string}
 */
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}
