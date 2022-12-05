import readlineSync from 'readline-sync';
import greetingName from './cli.js';
import launchEven from '../games/launchEven.js';
import launchCalc from '../games/launchCalc.js';

// import { getRandomInteger } from '../src/numericFunc.js';

export default (gameChosen) => {
  const name = greetingName();
  let questionList = [];
  switch (gameChosen) {
    case 'even':
      questionList = launchEven();
      break;
    case 'calc':
      questionList = launchCalc();
      break;
    default:
      break;
  }
  // console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (const questionPair of questionList) {
    console.log(`Question: ${questionPair[0]}`);
    const playerAnswer = readlineSync.question('Your Answer: ');
    if (playerAnswer === questionPair[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${questionPair[1]}'. \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
