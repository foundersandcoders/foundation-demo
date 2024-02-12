import addNumbers from './utils/addNumbers.js';
import areIntegers from './utils/areIntegers.js';

// first test this
// console.log(addNumbers(2,4))

//then refactor
const processData = (a, b) => {
  if (areIntegers(a, b)) return addNumbers(a, b);
  throw new Error('Both arguments must be integers');
};

export default processData;
