import { vi, describe, test, expect } from 'vitest';
import { charge } from '../../src/libs/payment';
import { submitOrder } from '../../src/mocking';

vi.mock('../../src/libs/payment');

describe('Tests on submitOrder()', () => {
  const order = { totalAmount: 100 };
  const creditCard = { creditCardNumber: 6857369684731545 };

  test('should charge the customer', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    await submitOrder(order, creditCard);

    expect(charge).toBeCalledWith(creditCard, order.totalAmount);
  });

  test('should return success when payment is successful', async () => {
    vi.mocked(charge).mockReturnValue({ status: 'success' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: true });
  });

  test('should return false when payment is not charged', async () => {
    vi.mocked(charge).mockReturnValue({ status: 'failed' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: false, error: 'payment_error' });
  });
});