function numberChecker(numbers)
{
  return function (num)
  {
    return numbers.includes(num);
  };
}
const myArray = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(myArray);
console.log(checkNumber(3));
console.log(checkNumber(6));