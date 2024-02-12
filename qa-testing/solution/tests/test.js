import assert from 'assert';
import test from 'node:test';

import addNumbers from '../utils/addNumbers.js';
import areIntegers from '../utils/areIntegers.js';
import processData from '../index.js';

test.describe('addNumbers', () => {
  // first unit test
  test('adds two numbers', () => {
    assert.strictEqual(addNumbers(2, 3), 5);
    assert.strictEqual(addNumbers(-1, 1), 0);
    assert.strictEqual(addNumbers(0, 0), 0);
    assert.strictEqual(addNumbers(10, -5), 5);
  });
});

test.describe('areIntegers', () => {
  // second unit test
  test('checks that all arguments are integers', () => {
    assert.strictEqual(areIntegers(2, '3'), false);
    assert.strictEqual(areIntegers('1', 2), false);
    assert.strictEqual(areIntegers('a', 'b'), false);
    assert.strictEqual(areIntegers(1.5, 2), false);
  });
});

// integration test
test.describe('ProcessData', () => {
  test('checks that all arguments are integers', () => {
    assert.throws(() => processData(2, '3'), {
      message: 'Both arguments must be integers',
    });
    assert.throws(() => processData('1', 2), {
      message: 'Both arguments must be integers',
    });
    assert.throws(() => processData('a', 'b'), {
      message: 'Both arguments must be integers',
    });
    assert.throws(() => processData(1.5, 2), {
      message: 'Both arguments must be integers',
    });
  });

  test('adds two numbers', () => {
    assert.strictEqual(processData(2, 3), 5);
    assert.strictEqual(processData(-1, 1), 0);
    assert.strictEqual(processData(0, 0), 0);
    assert.strictEqual(processData(10, -5), 5);
  });
});
