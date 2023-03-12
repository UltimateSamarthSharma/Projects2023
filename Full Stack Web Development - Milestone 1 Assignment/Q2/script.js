let operator = prompt("Enter operator (+, -, *, /):");
let number1 = parseFloat(prompt("Enter first number:"));
let number2 = parseFloat(prompt("Enter second number:"));

let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  default:
    document.write("Invalid operator");
}

document.write(`Result==> ${number1} ${operator} ${number2} = ${result}`);