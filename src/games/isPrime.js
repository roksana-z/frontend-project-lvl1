/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';
import {
  greeting, getName, randomNumber, answer,
} from '..';

export const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < 7; i++) {
    if (num % i === 0 && num !== i) {
      return 'yes';
    }
  }
  return 'no';
};

export const isPrimeQuestion = () => {
  greeting('prime');
  const userName = getName();
  let counter = 0;
  while (counter < 3) {
    const getNumber = randomNumber();
    console.log(`Question: ${getNumber}`);
    const actualAnswer = isPrime(getNumber);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      counter++;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
      return;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
