
import { setUpGame } from '..';
import getRandomIntInclusive from '../utils';


const findGcd = (num1, num2) => (num2 === 0 ? num1 : findGcd(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const createGamesData = () => {
  const firstOperand = getRandomIntInclusive(0, 25);
  const secondOperand = getRandomIntInclusive(0, 25);
  const question = `${firstOperand}  ${secondOperand}`;
  const answer = findGcd(firstOperand, secondOperand);
  return [question, answer.toString()];
};

const gcdQuestion = () => {
  setUpGame(createGamesData, description);
};

export default gcdQuestion;
