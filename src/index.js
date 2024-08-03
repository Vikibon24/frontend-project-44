import readLineSync from 'readline-sync';
import welcomeUser from './cli.js';

export default (playGame, showTask) => {
  const name = welcomeUser();
  showTask();
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = playGame();
    const answer = readLineSync.question('Your answer: ');
    const isAnswerCorrect = answer === correctAnswer.toString();
    if (!isAnswerCorrect) {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
