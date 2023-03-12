const n = prompt("Enter numbers from 1 to N:");
const arr = [];
for (let i = 1; i <= n; i++)
{
  arr.push(i);
}
document.write(`Numbers that are divisible by 3, but not by 2 are:`);
for (let i = 0; i < arr.length; i++)
{
  if (arr[i] % 3 !== 0)
  {
    continue;
  }
  if (arr[i] % 2 === 0)
  {
    continue;
  }
  document.write(`<br>${arr[i]}`);
}