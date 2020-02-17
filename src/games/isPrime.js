
import { setUpGame } from '..';
import getRandomIntInclusive from '../utils';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGamesData = () => {
  const question = getRandomIntInclusive(0, 25);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const isPrimesetUpGame = () => {
  setUpGame(createGamesData, description);
};

export default isPrimesetUpGame;
