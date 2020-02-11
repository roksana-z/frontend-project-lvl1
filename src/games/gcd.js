
import { question } from '..';
import getRandomIntInclusive from '../utils';


const findGcd = (num1, num2) => (num2 === 0 ? num1 : findGcd(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const firstOperand = getRandomIntInclusive(0, 25);
  const secondOperand = getRandomIntInclusive(0, 25);
  const operands = `${firstOperand}  ${secondOperand}`;
  const gcd = findGcd(firstOperand, secondOperand);
  return [operands, gcd];
};

const gcdQuestion = () => {
  question(data, description);
};

export default gcdQuestion;
