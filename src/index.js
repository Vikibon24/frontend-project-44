import readLineSync from 'readline-sync';

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default (playGame, task) => {
  const name = welcomeUser();
  console.log(task);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = playGame();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    const isAnswerCorrect = answer === correctAnswer;
    if (!isAnswerCorrect) {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
