import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    const mathSign = getRandomInteger(1, 3);
    const firstInt = getRandomInteger(3, 70);
    let secondInt;
    switch (mathSign) {
      case 1:
        secondInt = getRandomInteger(1, 29);
        questionPair[0] = `${firstInt} + ${secondInt}`;
        questionPair[1] = String(firstInt + secondInt);
        break;
      case 2:
        secondInt = getRandomInteger(1, firstInt);
        questionPair[0] = `${firstInt} - ${secondInt}`;
        questionPair[1] = String(firstInt - secondInt);
        break;
      case 3:
        secondInt = getRandomInteger(1, 10);
        questionPair[0] = `${firstInt} * ${secondInt}`;
        questionPair[1] = String(firstInt * secondInt);
        break;
      default:
        break;
    }
    questionList[counter] = questionPair;
  }
  console.log('What is the result of the expression?');
  return questionList;
};
