import readlineSync from 'readline-sync';
import {
  greeting, getName, randomNumber, answer,
} from '..';

export const isEven = (arg) => (arg % 2 === 0 ? 'yes' : 'no');

export const evenQuestion = () => {
  greeting('even');
  const userName = getName();
  let counter = 0;
  while (counter < 3) {
    const getNumber = randomNumber();
    console.log(`Question: ${getNumber}`);
    const actualAnswer = isEven(getNumber);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === actualAnswer) {
      console.log(answer(userName(), userAnswer, actualAnswer, true));
      counter += 1;
    } else {
      console.log(answer(userName(), userAnswer, actualAnswer, false));
      return;
    }
  }
  console.log(`Congratulations, ${userName()}!`);
};
