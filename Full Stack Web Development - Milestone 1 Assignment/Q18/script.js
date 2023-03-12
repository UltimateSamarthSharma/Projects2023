function toggleHeading()
{
  var heading = document.getElementById("main-heading");
  if (heading.innerHTML === "The most affordable learning platform")
  {
    heading.innerHTML = "PW Skills";
  }
  else
  {
    heading.innerHTML = "The most affordable learning platform";
  }
}