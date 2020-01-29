
import { randomNumber, question } from '..';


const findGcd = (num1, num2) => (num2 === 0 ? num1 : findGcd(num1 % num2));

const operands = [[randomNumber(), randomNumber()], 
[randomNumber(), randomNumber()], [randomNumber(), randomNumber()]];

const newOperands = [...operands];

const separate = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const pair = arr[i].join(' ');
    result.push(pair);
  }
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const answers = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const ans = findGcd(...arr[i]);
    result.push(ans);
  }
  return result;
};

const gcdQuestion = () => {
  question(separate(newOperands), answers(operands), description);
};

export default gcdQuestion;
