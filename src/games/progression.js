/* eslint-disable space-infix-ops */
/* eslint-disable use-isnan */
import readlineSync from 'readline-sync';
import {
  greeting, name, number, answer, getRandomIntInclusive,
} from '..';

export const createRandomProgression = (amountOfProgression) => {
  const start = number();
  const array = [start];
  const step = number();
  let counter = start;
  while (array.length < amountOfProgression) {
    counter +=step;
    array.push(counter);
  }
  return array;
};

export const hideDigit = (arr) => {
  const i = getRandomIntInclusive(0, arr.length - 1);
  const arr2 = arr;
  arr2[i] = '..';
  return arr2;
};

export const findAnswerOfProgression = (arr) => {
  const a = arr[1] - arr[0];
  const b = arr[3] - arr[2];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === '..') {
      const previousDigit = arr[i - 1];
      const currentDigit = previousDigit + a;
      if (isNaN(currentDigit)) {
        const nextDigit = arr[i + 1];
        return nextDigit - b;
      }
      return currentDigit;
    }
  }
};

export const progressionQuestion = () => {
  greeting('progression');
  const userName = name();
  let counter = 0;
  while (counter < 3) {
    const progression = hideDigit(createRandomProgression(10));
    console.log(`Question: ${progression}`);
    const actualAnswer = findAnswerOfProgression(progression);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer == actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      counter ++;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
