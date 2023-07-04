function validateForm(event) {
  event.preventDefault(); // Prevents form submission if validation fails

  // Fetching form field values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var date = document.getElementById("date").value;
  var color = document.getElementById("color").value;

  // Name validation (at least 2 characters)
  if (name.length < 2) {
    alert("Please enter a valid name.");
    return;
  }

  // Email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone number validation (10 digits)
  var phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  // Password validation (at least 8 characters)
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Age validation (between 1 and 150)
  if (age < 1 || age > 150) {
    alert("Please enter a valid age.");
    return;
  }

  // Gender validation
  if (gender === "") {
    alert("Please select a gender.");
    return;
  }

  // Date validation (not in the past)
  var today = new Date().toISOString().split("T")[0];
  if (date < today) {
    alert("Please enter a valid date.");
    return;
  }

  // Color validation
  if (!color) {
    alert("Please select a color.");
    return;
  }

  // Form is valid, proceed with submission or further processing
  alert("Form submitted successfully!");
  document.getElementById("myForm").reset(); // Optional: Reset the form after submission
}
