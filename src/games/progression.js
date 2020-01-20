/* eslint-disable no-plusplus */
/* eslint-disable space-infix-ops */
/* eslint-disable use-isnan */
import readlineSync from 'readline-sync';
import {
  greeting, getName, randomNumber, answer, getRandomIntInclusive,
} from '..';

export const createRandomProgression = (progressionAmount) => {
  const start = randomNumber();
  const array = [start];
  const step = randomNumber();
  let counter = start;
  while (array.length < progressionAmount) {
    counter +=step;
    array.push(counter);
  }
  return array;
};

export const hideDigit = (arr) => {
  const hiddenI = getRandomIntInclusive(0, arr.length - 1);
  const newArr = [];
  for (let index = 0; index <= arr.length - 1; index++) {
    if (index === hiddenI) {
      newArr.push('..');
      index++;
    }
    newArr.push(arr[index]);
  }
  return newArr.join(' ');
};


// eslint-disable-next-line consistent-return
const findAnswerOfProgression = (arr1, arr2) => {
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!arr2.includes(arr1[i])) {
      return arr1[i];
    }
  }
};

export const progressionQuestion = () => {
  greeting('progression');
  const userName = getName();
  let counter = 0;
  while (counter < 3) {
    const originalpProgression = createRandomProgression(10);
    const modifiedProgression = hideDigit(originalpProgression);
    console.log(`Question: ${modifiedProgression}`);
    const actualAnswer = findAnswerOfProgression(originalpProgression, modifiedProgression);
    const userAnswer = readlineSync.question('Your answer:');
    if (Number(userAnswer) === actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      counter++;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
      return;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
