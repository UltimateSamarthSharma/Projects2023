let password = prompt("Enter password:");
let confirmPassword = prompt("Confirm password:");

if (password === confirmPassword) {
  document.write("Password Matched. Password validation Successful.");
} else {
  document.write("Password didn't match. Password validation unsuccessful.");
}