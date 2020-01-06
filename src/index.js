import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const saveName = () => name;
  return saveName;
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEven = (arg) => arg % 2 === 0;

export const checkAnswer = (arg, bool) => {
  if (bool === true && arg === 'yes' || bool === false && arg === 'no') {
    return 'correct';
  } return 'not correct';
};

export const question = () => {
  const getName = greeting();
  let counter = 0;
  while (counter < 3) {
    const number = getRandomIntInclusive(0, 1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if (checkAnswer(answer, isEven(number)) === 'correct') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'yes' is wrong answer ;(.\nCorrect answer was 'no'. Let's try again, ${getName()}`);
    }
  }console.log(`Congratulations, ${getName()}!`);
};
