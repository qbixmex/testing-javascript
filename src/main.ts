/**
 * Calculates the discounted price based on the provided discount code.
 * 
 * @param price The original price of the item.
 * @param discountCode The discount code to apply.
 * 
 * @example
 * ```typescript
 * calculateDiscount(100, 'SAVE10') // returns 90
 * calculateDiscount(200, 'SAVE20') // returns 160
 * calculateDiscount('100', 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(0, 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(-1, 'SAVE10') // returns 'Invalid price'
 * calculateDiscount(100, 10) // returns 'Invalid price'
 * calculateDiscount(100, 'SUMMER50') // returns 'Invalid discount code'
 * ```
 * 
 * @returns The discounted price or an error message.
 */
export function calculateDiscount(
  price: number,
  discountCode: string,
): number | string {
  if (price <= 0) return 'Invalid price !';

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
