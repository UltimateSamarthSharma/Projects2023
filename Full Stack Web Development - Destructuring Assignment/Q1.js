function wordCount(str) {
  const wordCounts = new Map();
  const words = str.split(" ");
  for (const word of words) {
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word) + 1);
    } else {
      wordCounts.set(word, 1);
    }
  }
  return wordCounts;
}
const text = "The quick brown fox jumps over the lazy dog. The lazy dog, however, jumps over nothing.";
const countedWords = wordCount(text);
for (const [word, count] of countedWords) {
  console.log(`${word}: ${count}`);
}