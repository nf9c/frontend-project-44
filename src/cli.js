import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Game!');
  const name = readlineSync.question('May I have Your name? ');
  console.log(`Hello, ${name}!`);
  return (name);
};
