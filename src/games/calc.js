
import { setUpGame } from '..';
import getRandomIntInclusive from '../utils';

const operators = ['+', '-', '*'];

const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';

const createGamesData = () => {
  const firstOperand = getRandomIntInclusive(0, 25);
  const secondOperand = getRandomIntInclusive(0, 25);
  const operatorsIndex = getRandomIntInclusive(0, operators.length - 1);
  const operator = operators[operatorsIndex];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calcExpression(firstOperand, secondOperand, operator);
  return [question, answer.toString()];
};

const calcQuestion = () => {
  setUpGame(createGamesData, description);
};

export default calcQuestion;
