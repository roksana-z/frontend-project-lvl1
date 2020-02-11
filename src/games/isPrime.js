
import { question } from '..';
import getRandomIntInclusive from '../utils';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const data = () => {
  const number = getRandomIntInclusive(0, 25);
  const result = isPrime(number) ? 'yes' : 'no';
  return [number, result];
};

const isPrimeQuestion = () => {
  question(data, description);
};

export default isPrimeQuestion;
