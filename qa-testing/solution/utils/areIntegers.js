export default function areIntegers(a, b) {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) {
    return false;
  }
  return true;
}
