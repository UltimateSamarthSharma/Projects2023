function changeColor() {
  var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randColor;
}