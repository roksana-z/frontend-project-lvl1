
import { question, randomNumber } from '..';

const operators = ['+', '-', '*'];


const firstOperand = [randomNumber(), randomNumber(), randomNumber()];
const secondOperand = [randomNumber(), randomNumber(), randomNumber()];

const expression = (num1, num2, operator) => {
  const result = [];
  for (let i = 0; i < operator.length; i += 1) {
    const exp = `${num1[i]} ${operator[i]} ${num2[i]}`;
    result.push(exp);
  }
  return result;
};

const calcExpression = (num1, num2, operator) => {
  const result = [];
  for (let i = 0; i < operator.length; i += 1) {
    switch (operator[i]) {
      case '+':
        result.push(num1[i] + num2[i]);
        break;
      case '-':
        result.push(num1[i] - num2[i]);
        break;
      case '*':
        result.push(num1[i] * num2[i]);
        break;
      default: break;
    }
  }
  return result;
};

const description = 'What is the result of the expression?';

const calcQuestion = () => {
  question(expression(firstOperand, secondOperand, operators), calcExpression(firstOperand, secondOperand, operators), description);
};

export default calcQuestion;
