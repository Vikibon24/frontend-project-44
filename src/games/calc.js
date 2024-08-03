import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
const getOperator = () => operators[Math.floor((Math.random() * 10) / 4)];

const showTask = () => console.log('What is the result of the expression?');
const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.error(`Wrong sign ${sign}`);
  }
};

const playCalc = () => {
  const sign = getOperator();
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  console.log(`Question: ${num1} ${sign} ${num2}`);

  const correctAnswer = calc(num1, num2, sign);
  return correctAnswer;
};

export default () => playGame(playCalc, showTask);
