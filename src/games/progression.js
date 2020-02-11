
import { question } from '..';
import getRandomIntInclusive from '../utils';

const createRandomProgression = () => {
  const start = getRandomIntInclusive(0, 25);
  const array = [start];
  const step = getRandomIntInclusive(0, 25);
  let counter = start;
  while (array.length < 11) {
    counter += step;
    array.push(counter);
  }
  return array;
};

const hideDigit = (arr) => {
  const index = getRandomIntInclusive(0, arr.length - 1);
  const newArr = [];
  let hiddenNumber;
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (i === index) {
      hiddenNumber = arr[i];
      newArr.push('..');
      i += 1;
    }
    newArr.push(arr[i]);
  }
  return [newArr.join(' '), hiddenNumber];
};

const description = 'What number is missing in the progression?';

const data = () => {
  const originalProgression = createRandomProgression();
  const progressionsData = hideDigit(originalProgression);
  const modifiedProgression = progressionsData[0];
  const answer = progressionsData[1];
  return [modifiedProgression, answer];
};

const progressionQuestion = () => {
  question(data, description);
};

export default progressionQuestion;
