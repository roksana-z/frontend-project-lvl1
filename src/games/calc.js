
import { question } from '..';
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
      return undefined;
  }
};

const description = 'What is the result of the expression?';

const data = () => {
  const firstOperand = getRandomIntInclusive(0, 25);
  const secondOperand = getRandomIntInclusive(0, 25);
  const operatorsIndex = getRandomIntInclusive(0, operators.length - 1);
  const operator = operators[operatorsIndex];
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const resultOfExpression = calcExpression(firstOperand, secondOperand, operator);
  return [expression, resultOfExpression];
};

const calcQuestion = () => {
  question(data, description);
};

export default calcQuestion;
