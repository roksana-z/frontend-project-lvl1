
import { makeGame } from '..';
import getRandomIntInclusive from '../utils';

const progressionLength = 10;

const createProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const createGameData = () => {
  const start = getRandomIntInclusive(0, 25);
  const step = getRandomIntInclusive(0, 25);
  const progression = createProgression(start, step, progressionLength);
  const hiddenDigitIndex = getRandomIntInclusive(0, progressionLength - 1);
  const answer = progression.splice(hiddenDigitIndex, 1, '..');
  const question = progression.join(' ');
  return [question, answer.toString()];
};

export default () => {
  makeGame(createGameData, description);
};
