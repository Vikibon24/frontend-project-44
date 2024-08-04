import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const progressionLength = 8;

const showTask = () => console.log('What number is missing in the progression?');
const getProgression = () => {
  const num = getRandomNumber();
  const step = getRandomNumber();
  const result = [num];
  for (let i = num + step; result.length < progressionLength; i += step) {
    result.push(i);
  } return result;
};

const playProgression = () => {
  const skippedIndexNumber = getRandomNumber(0, progressionLength);
  const progression = getProgression();
  const skippedNumber = progression[skippedIndexNumber];
  progression[skippedIndexNumber] = '..';

  console.log(`Question: ${progression}`);
  const correctAnswer = skippedNumber;
  return correctAnswer;
};

export default () => playGame(playProgression, showTask);
