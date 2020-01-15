/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';
import { greeting, name, number, answer } from '..';


export const findGcd = (num1, num2) => {
  const iter = (num) => {
    if (num1 % num === 0 && num2 % num === 0) {
      return num;
    }
    return iter(num - 1);
  };
  if (num1 % num2 === 0) {
    return num2;
  } if (num2 % num1 === 0) {
    return num1;
  } if (num1 > num2) {
    return iter(num2);
  }
  return iter(num1);
};

export const gcdQuestion = () => {
  greeting('gcd');
  const userName = name();
  let counter = 0;
  while (counter < 3) {
    const numberOne = number();
    const numberTwo = number();
    console.log(`Question: ${numberOne} ${numberTwo}`);
    const actualAnswer = findGcd(numberOne, numberTwo);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer == actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      counter ++;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};