import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const getGreatestCommonDiv = (num1, num2) => {
  let result = 1;
  for (let i = 2; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      if (i > result) {
        result = i;
      }
    }
  } return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const playGcd = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGreatestCommonDiv(num1, num2);
  return [question, correctAnswer.toString()];
};

export default () => playGame(playGcd, task);
