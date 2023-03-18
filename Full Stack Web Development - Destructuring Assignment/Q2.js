function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);