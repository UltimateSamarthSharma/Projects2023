let items = [];
let n = parseInt(prompt("Enter number of items:"));
for (let i = 1; i <= n; i++) {
  let item = prompt(`Enter item ${i}:`);
  items.push(Number(item));
}
const res = items.concat(items);
document.write(`Result: ${res}`);