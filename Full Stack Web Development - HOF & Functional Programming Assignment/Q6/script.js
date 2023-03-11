function validateLinkedInUrl(url) {
  const regex = /^(http|https)?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{4,100}[a-zA-Z0-9]$/; // https://www.linkedin.com/in/...
  return regex.test(url); // {4:100} means minimum of 5 and maximum of 100 characters to be allowed here!
}
const inputUrl = prompt("Enter your LinkedIn profile URL:");
if (validateLinkedInUrl(inputUrl)) {
  document.getElementById("result").innerHTML = "Valid LinkedIn profile URL";
} else {
  document.getElementById("result").innerHTML = "Invalid LinkedIn profile URL";
}