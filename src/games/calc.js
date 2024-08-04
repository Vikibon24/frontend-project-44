import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const operators = ['+', '-', '*', '/'];
const getOperator = () => operators[getRandomNumber(operators.length - 1)];

const showTask = () => console.log('What is the result of the expression?');
const calc = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      console.error(`Wrong sign ${sign}`);
  }
};

const playCalc = () => {
  const sign = getOperator();
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  console.log(`Question: ${num1} ${sign} ${num2}`);

  const correctAnswer = calc(num1, sign, num2);
  return correctAnswer;
};

export default () => playGame(playCalc, showTask);
