
import { randomNumber, question } from '..';

const isEven = (arg) => (arg % 2 === 0 ? 'yes' : 'no');

const numbers = [randomNumber(), randomNumber(), randomNumber()];

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const corectAnswers = numbers.map(isEven);

const evenQuestion = () => {
  question(numbers, corectAnswers, description);
};

export default evenQuestion;
