import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have Your name? ');
  console.log(`Hello, ${name}!`);
};
