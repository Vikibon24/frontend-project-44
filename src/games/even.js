import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const isEven = (number) => number % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => playGame(playEven, task);
