var items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];
var currentIndex = 0;
function addListItem() {
  var list = document.getElementById("list");
  if (currentIndex < items.length) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(items[currentIndex]));
    list.appendChild(newItem);
    currentIndex++;
  } else {
    alert("All items have been added!");
  }
}