import readlineSync from 'readline-sync';
import greetingName from '../src/cli.js';
import { getRandomInteger } from '../src/numericFunc.js';

export default () => {
  const name = greetingName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 0; counter < 3; counter += 1) {
    const randomNum = getRandomInteger(1, 99);
    const expectedAnswer = ((randomNum % 2 === 0) ? 'yes' : 'no');
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your Answer: ');
    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
