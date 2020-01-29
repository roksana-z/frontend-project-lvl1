
import { randomNumber, getRandomIntInclusive, question } from '..';

const createRandomProgression = (progressionAmount) => {
  const start = randomNumber();
  const array = [start];
  const step = randomNumber();
  let counter = start;
  while (array.length < progressionAmount) {
    counter += step;
    array.push(counter);
  }
  return array;
};

const hideDigit = (arr) => {
  const hiddenI = getRandomIntInclusive(0, arr.length - 1);
  const newArr = [];
  for (let index = 0; index <= arr.length - 1; index += 1) {
    if (index === hiddenI) {
      newArr.push('..');
      index += 1;
    }
    newArr.push(arr[index]);
  }
  return newArr.join(' ');
};

const description = 'What number is missing in the progression?';

const originalProgressions = [createRandomProgression(10), createRandomProgression(10), createRandomProgression(10)];

const copyProgressions = [...originalProgressions];

const modifiedProgressions = copyProgressions.map(hideDigit);

const findNumber = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i += 1) {
    if (!arr2.includes(arr1[i])) {
      return arr1[i];
    }
  }
  return undefined;
};

const answers = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr2.length; i += 1) {
    const hiddenNumber = findNumber(arr1[i], arr2[i]);
    result.push(hiddenNumber);
  }
  return result;
};

const progressionQuestion = () => {
  question(modifiedProgressions, answers(originalProgressions, modifiedProgressions), description);
};

export default progressionQuestion;
