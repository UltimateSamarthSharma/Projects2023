function doubleArray(arr, callback)
{
  const doubledArr = arr.map(callback);
  return doubledArr;
}
const arr = [1, 2, 3, 4, 5];
function doubleNum(num)
{
  return num * 2;
}
const doubledArr = doubleArray(arr, doubleNum);
console.log(doubledArr);