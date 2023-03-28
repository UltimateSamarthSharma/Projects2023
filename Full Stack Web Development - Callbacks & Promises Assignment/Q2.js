function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();
  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }
  return logString;
}
const str = "hello, world!";
const logManipulatedString = manipulateString(str);
logManipulatedString();