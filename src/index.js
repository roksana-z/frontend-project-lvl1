/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const greeting = (game) => {
  switch (game) {
    case 'even':
      console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
      break;
    case 'gcd':
      console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?');
      break;
    case 'prime':
      console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default: break;
  }
};

export const answer = (name, userAns, actualAns, bool) => {
  if (bool === true) {
    const a = 'Correct!';
    return a;
  }
  const b = `'${userAns}' is wrong answer ;(.\nCorrect answer was '${actualAns}'. Let's try again, ${name}`;
  // eslint-disable-next-line no-useless-return
  return b;
};

export const name = () => {
  const name2 = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name2}!`);
  const saveName = () => name2;
  return saveName;
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const number = () => getRandomIntInclusive(1, 25);

export const isEven = (arg) => (arg % 2 === 0 ? 'yes' : 'no');

export const question = () => {
  greeting('even');
  const getName = name();
  let counter = 0;
  while (counter < 3) {
    const getNumber = getRandomIntInclusive(0, 10);
    console.log(`Question: ${getNumber}`);
    const actualAnswer = isEven(getNumber);
    const answer = readlineSync.question('Your answer:');
    if (answer === actualAnswer) {
      console.log('correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(.\nCorrect answer was '${actualAnswer}'. Let's try again, ${getName}`);
    }
  }
  console.log(`Congratulations, ${getName()}!`);
};

export const pair1 = cons(number(), number());
export const pair2 = cons(number(), number());
export const pair3 = cons(number(), number());

export const stringSum = `${car(pair1).toString()} + ${cdr(pair1).toString()}`;

export const stringMult = `${car(pair2).toString()} * ${cdr(pair2).toString()}`;


export const stringSubtr = `${car(pair3).toString()} - ${cdr(pair3).toString()}`;


export const calcSum = car(pair1) + cdr(pair1);
export const calcMult = car(pair2) * cdr(pair2);
export const calcSubtr = car(pair3) - cdr(pair3);

export const questionCalc = () => {
  greeting('calc');
  const getName = name();
  const listOfCalcStrings = cons(stringSum, cons(stringSubtr, cons(stringMult, null)));
  const listOfCalcs = cons(calcSum, cons(calcSubtr, cons(calcMult, null)));
  const iter = (list1, list2) => {
    if (list1 === null) {
      console.log(`Congratulations, ${getName()}`);
      return;
    }
    console.log(`Question:${car(list1)}`);
    const actualAnswer = car(list2);
    const userAnswer = readlineSync.question('Your answer:');
    // eslint-disable-next-line eqeqeq
    if (userAnswer == actualAnswer) {
      console.log('correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${actualAnswer}'.
      Let's try again, ${getName()}!`);
      return;
    }
    return iter(cdr(list1), cdr(list2));
  };
  return iter(listOfCalcStrings, listOfCalcs);
};
