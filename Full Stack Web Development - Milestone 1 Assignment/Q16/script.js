const randomNumber = (() => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
})();
document.write(`The random number generated from numbers 1 to 100 is ${randomNumber}.`);