function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");
  var successMessage = document.getElementById("success-message");
  if (email.indexOf("@") === -1 || password.length < 8) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return false;
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";
    return true;
  }
}