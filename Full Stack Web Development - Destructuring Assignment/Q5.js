function findMaxAndMin(arr) {
  const [min, ...rest] = arr;
  const { max } = rest.reduce((acc, val) => ({ max: Math.max(acc.max, val) }), {
    max: rest[0],
  });
  return { max, min: Math.min(...arr) };
}
const arr = [5, 2, 7, 1, 9];
const result = findMaxAndMin(arr);
console.log(result);