export function addNumbers(a, b) {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) {
    throw new Error('Both arguments must be integers');
  }

  return a + b;
}
