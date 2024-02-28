import readline from 'readline';
import add from './utils/add.js';
import { subtract } from './utils/subtract.js';
import multiply from './utils/multiply.js';
import { divide } from './utils/divide.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter the first number: ', (number1) => {
  rl.question('Please enter the second number: ', (number2) => {
    rl.question('Please choose the operation (+, -, *, /): ', (operation) => {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      let result;

      switch (operation) {
        case '+':
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          result = divide(num1, num2);
          break;
        default:
          console.log('Invalid operation. Please use +, -, *, or /');
          rl.close();
          return;
      }

      console.log(`The result of ${num1} ${operation} ${num2} = ${result}`);
      rl.close();
    });
  });
});
