import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const task = 'What is the result of the expression?';
const calc = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw Error(`Wrong sign ${sign}`);
  }
};

const playCalc = () => {
  const sign = getOperator();
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calc(num1, sign, num2);
  return [question, correctAnswer.toString()];
};

export default () => playGame(playCalc, task);
