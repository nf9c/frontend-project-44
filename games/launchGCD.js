import getRandomInteger from '../src/numericFunc.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    const firstInt = getRandomInteger(2, 100);
    const secondInt = getRandomInteger(2, 100);
    let starter = firstInt;
    // путем сравнения двух чисел между собой и с 1/2 бОльшего числа определяем
    // с какого числа будем начинать цикл.
    if (firstInt !== secondInt) {
      if (firstInt > secondInt) {
        if (Math.round(firstInt / 2) > secondInt) {
          starter = secondInt;
        } else starter = Math.round(firstInt / 2);
      } else if (Math.round(secondInt / 2) > firstInt) {
        starter = firstInt;
      } else starter = Math.round(secondInt / 2);
    } else starter = firstInt;
    for (starter; starter > 0; starter -= 1) {
      if ((firstInt % starter === 0) && (secondInt % starter === 0)) {
        break;
      }
    }
    questionPair[0] = `${firstInt} ${secondInt}`;
    questionPair[1] = String(starter);
    questionList[counter] = questionPair;
  }
  console.log('Find the greatest common divisor of given numbers.');
  return questionList;
};
