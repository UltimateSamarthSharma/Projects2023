const delay = 3000;
const n = 100;
function generateRandomNumber() {
  setTimeout(function() {
    const randomNumber = Math.floor(Math.random() * n) + 1;
    document.write(`<b><br>Random number generated, from the numbers 1 to ${n}, is: ${randomNumber}</b>`);
  }, delay+1000);
  let remainingTime = delay / 1000;
  const intervalId = setInterval(function() {
    document.write(`Generating random number in ${remainingTime} seconds...<br>`);
    remainingTime--;
    if (remainingTime < 1) {
      clearInterval(intervalId);
    }
  }, 1000);
}
generateRandomNumber();