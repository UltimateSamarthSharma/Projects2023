function validateUrl(url) {
  const regex = /^(http|https)?:\/\/(www\.)?[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+\.+(com|org)+$/;
  return regex.test(url);
}
const inputUrl = prompt("Enter a valid example URL:");
if (validateUrl(inputUrl)) {
  document.getElementById("result").innerHTML = "Valid URL";
} else {
  document.getElementById("result").innerHTML = "Invalid URL";
}