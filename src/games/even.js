
import { setUpGame } from '..';
import getRandomIntInclusive from '../utils';

const isEven = (arg) => (arg % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getResult = (num) => {
  const result = isEven(num) ? 'yes' : 'no';
  return result;
};

const createGamesData = () => {
  const question = getRandomIntInclusive(0, 25);
  const answer = getResult(question);
  return [question, answer];
};

const evenQuestion = () => {
  setUpGame(createGamesData, description);
};

export default evenQuestion;
