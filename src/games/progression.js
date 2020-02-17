
import { setUpGame } from '..';
import getRandomIntInclusive from '../utils';

const createRandomProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const createGamesData = () => {
  const progressionLength = 10;
  const start = getRandomIntInclusive(0, 25);
  const step = getRandomIntInclusive(0, 25);
  const progression = createRandomProgression(start, step, progressionLength);
  const hiddenDigitIndex = getRandomIntInclusive(0, progressionLength - 1);
  const answer = progression.splice(hiddenDigitIndex, 1, '..');
  const question = progression.join(' ');
  return [question, answer.toString()];
};

const progressionQuestion = () => {
  setUpGame(createGamesData, description);
};

export default progressionQuestion;
