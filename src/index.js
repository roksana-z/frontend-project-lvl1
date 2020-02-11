
import readlineSync from 'readline-sync';

export const question = (dataFunc, phrase) => {
  console.log('Welcome to the Brain Games!');
  console.log(phrase);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let round = 0; round < 3; round += 1) {
    const [quiz, answer] = dataFunc();
    console.log(`Question: ${quiz}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(.\nCorrect answer was '${answer}'. Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default question;
