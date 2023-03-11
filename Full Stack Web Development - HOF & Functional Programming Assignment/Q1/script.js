const input = prompt("Enter a string:");
setTimeout(function() {
  const reverse = input.split('').reverse().join('');
  document.write(reverse);
}, 2000);