import readlineSync from 'readline-sync';
import greetingName from './cli.js';
import launchEven from '../games/launchEven.js';
import launchCalc from '../games/launchCalc.js';
import launchGcd from '../games/launchGCD.js';

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
    case 'gcd':
      questionList = launchGcd();
      break;
    default:
      break;
  }
  for (let counter = 0; counter < 3; counter += 1) {
    console.log(`Question: ${questionList[counter][0]}`);
    const playerAnswer = readlineSync.question('Your Answer: ');
    if (playerAnswer === questionList[counter][1]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${questionList[counter][1]}'. \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
