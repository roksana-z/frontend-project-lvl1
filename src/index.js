
import readlineSync from 'readline-sync';

export const makeGame = (getGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [quiz, answer] = getGameData();
    console.log(`Question: ${quiz}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default makeGame;
