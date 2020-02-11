
import { question } from '..';
import getRandomIntInclusive from '../utils';

const isEven = (arg) => (arg % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getResult = (num) => {
  const result = isEven(num) ? 'yes' : 'no';
  return result;
};

const data = () => {
  const number = getRandomIntInclusive(0, 25);
  const answer = getResult(number);
  return [number, answer];
};

const evenQuestion = () => {
  question(data, description);
};

export default evenQuestion;
t