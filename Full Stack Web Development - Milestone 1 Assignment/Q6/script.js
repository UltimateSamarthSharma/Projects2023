function countVowel(str)
{
  const count = str.match(/[aeiouAEIOU]/gi).length;
  return count;
}
const string = prompt('Enter a string:');
const isVowel = countVowel(string);
if (isVowel)
{
  document.write(`The given string '${string}' is a vowel.<br><br>Which means:<br>`);
}
else
{
  document.write(`The given string '${string}' is not a vowel.<br><br>Which means:<br>`);
}
document.write(`There are ${isVowel} vowels in a string: ${string}`);