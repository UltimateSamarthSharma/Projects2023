let marks = [];
let n = parseInt(prompt("Enter number of students:"));
for (let i = 1; i <= n; i++) {
  let mark = prompt(`Enter the marks for student roll no. 10${i}:`);
  marks.push(Number(mark));
}
let highestMarks = marks.reduce((a, b) => a > b ? a : b);
document.write(`Highest Marks: ${highestMarks}`);
