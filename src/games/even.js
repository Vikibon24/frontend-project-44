import readLineSync from 'readline-sync';
import sayHello from '../cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const isAnswerCorrect = answer === correctAnswer;

    if (!isAnswerCorrect) {
      console.log (`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again!`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
