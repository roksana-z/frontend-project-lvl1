
import { question, randomNumber } from '..';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < 7; i += 1) {
    if (num % i === 0 && num !== i) {
      return 'yes';
    }
  }
  return 'no';
};

const numbers = [randomNumber(), randomNumber(), randomNumber()];

const answers = numbers.map(isPrime);

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrimeQuestion = () => {
  question(numbers, answers, description);
};

export default isPrimeQuestion;
