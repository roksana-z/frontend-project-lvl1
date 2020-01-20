/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

export const greeting = (game) => {
  console.log('Welcome to the Brain Games!');
  switch (game) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default: break;
  }
};

export const answer = (name, userAns, actualAns, bool) => {
  if (bool === true) {
    return 'Correct!';
  }
  return `'${userAns}' is wrong answer ;(.\nCorrect answer was '${actualAns}'. Let's try again, ${name}`;
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const saveName = () => name;
  return saveName;
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNumber = () => getRandomIntInclusive(1, 25);
