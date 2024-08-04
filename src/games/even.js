import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const isEven = (number) => number % 2 === 0;
const showTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playEven = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => playGame(playEven, showTask);
