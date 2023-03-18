function extractElements(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop();
  return [first, second, last];
}
const numbers = [1, 2, 3, 4, 5];
const extractedElements = extractElements(numbers);
console.log(extractedElements);