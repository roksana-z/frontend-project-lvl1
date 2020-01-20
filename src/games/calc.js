/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import {
  greeting, getName, randomNumber, answer,
} from '..';

export const operators = ['+', '-', '*'];

export const makeExpression = (arr, operator) => {
  switch (operator) {
    case '+':
      return `${arr[0]} + ${arr[1]}`;
    case '-':
      return `${arr[0]} - ${arr[1]}`;
    case '*':
      return `${arr[0]} * ${arr[1]}`;
    default: break;
  }
};

export const calc = (arr, operator) => {
  switch (operator) {
    case '+':
      return arr[0] + arr[1];
    case '-':
      return arr[0] - arr[1];
    case '*':
      return arr[0] * arr[1];
    default: break;
  }
};

export const calcQuestion = () => {
  greeting('calc');
  const userName = getName();
  let i = 0;
  while (i <= operators.length - 1) {
    const numbers = [randomNumber(), randomNumber()];
    console.log(`Question: ${makeExpression(numbers, operators[i])}`);
    const actualAnswer = calc(numbers, operators[i]);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer == actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      i++;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
      return;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
