import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const showTask = () => console.log('What number is missing in the progression?');
const getProgression = () => {
  const num = getRandomNumber();
  const step = getRandomNumber();
  const result = [num];
  for (let i = num + step; result.length <= 8; i += step) {
    result.push(i);
  } return result;
};

const playProgression = () => {
  const skippedIndexNumber = Math.floor((Math.random() * 8) + 1);
  const progression = getProgression();
  const skippedNumber = progression[skippedIndexNumber];
  progression[skippedIndexNumber] = '..';

  console.log(`Question: ${progression}`);
  const correctAnswer = skippedNumber;
  return correctAnswer;
};

export default () => playGame(playProgression, showTask);
