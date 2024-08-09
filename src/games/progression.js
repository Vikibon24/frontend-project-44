import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const progressionLength = 8;

const task = 'What number is missing in the progression?';
const getProgression = (num = getRandomNumber(), step = getRandomNumber()) => {
  const result = [num];
  for (let i = num + step; result.length < progressionLength; i += step) {
    result.push(i);
  }
  return result;
};

const playProgression = () => {
  const skippedIndexNumber = getRandomNumber(0, progressionLength);
  const progression = getProgression();
  const skippedNumber = progression[skippedIndexNumber];
  progression[skippedIndexNumber] = '..';

  const question = `${progression.join(' ')}`;
  const correctAnswer = skippedNumber;
  return [question, correctAnswer.toString()];
};

export default () => playGame(playProgression, task);
