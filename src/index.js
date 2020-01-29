
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const saveName = () => name;
  return saveName;
};

export const getRandomIntInclusive = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export const randomNumber = () => getRandomIntInclusive(1, 25);


export const question = (arg, actualAnswer, phrase) => {
  greeting();
  console.log(phrase);
  const userName = getName();
  let i = 0;
  while (i < arg.length) {
    console.log(`Question: ${arg[i]}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === actualAnswer[i].toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(.\nCorrect answer was '${actualAnswer[i]}'. Let's try again, ${userName()}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
