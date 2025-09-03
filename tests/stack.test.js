import { describe, test, expect, beforeEach } from 'vitest';
import { Stack } from '../src/core';

describe('Tests on Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push should add an item to the stack', () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
  });

  test('pop should remove and return the top item from the stack', () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test('pop should throw an error if stack is empty', () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  test('peek should return the top item from the stack without removing it', () => {
    stack.push(1);
    stack.push(2);

    const peekedItem = stack.peek();

    expect(peekedItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test('peek should throw an error if stack is empty', () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  test('isEmpty should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty should return false if stack is not empty', () => {
    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  test('size should return the number of items in the stack', () => {
    [1, 2].forEach(item => stack.push(item));
    expect(stack.size()).toBe(2);
  });

  test('clear should remove all items from the stack', () => {
    [1, 2].forEach(item => stack.push(item));

    stack.clear()

    expect(stack.size()).toBe(0);
  });
});
