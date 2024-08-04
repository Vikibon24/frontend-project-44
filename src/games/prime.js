import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const showTask = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

const playPrime = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => playGame(playPrime, showTask);
