let userName = prompt("What is your name?");
let userName2 = userName.charAt(0).toUpperCase() + userName.slice(1);
let isLowerCase = userName[0] === userName[0].toLowerCase() ? true : false;
if (isLowerCase)
{
  document.write(`You have entered: ${userName}<br>`);
  document.write(`Output: ${userName2}`);
}
else
{
  document.write(`You have entered: ${userName}<br>`);
  document.write(`Output: ${userName}`);
}