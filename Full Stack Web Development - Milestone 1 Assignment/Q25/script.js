const image = document.getElementById("image");
let x = 0;
let y = 0;
var moveLeft = false;
var moveUp = false;
var moveRight = false;
var moveDown = false;
const speed = 5;
function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      moveLeft = true;
      break;
    case "ArrowUp":
      moveUp = true;
      break;
    case "ArrowRight":
      moveRight = true;
      break;
    case "ArrowDown":
      moveDown = true;
      break;
    default:
      break;
  }
}
function handleKeyUp(event) {
  switch (event.key) {
    case "ArrowLeft":
      moveLeft = false;
      break;
    case "ArrowUp":
      moveUp = false;
      break;
    case "ArrowRight":
      moveRight = false;
      break;
    case "ArrowDown":
      moveDown = false;
      break;
    default:
      break;
  }
}
function moveImage() {
  if (moveLeft && x > 0) {
    x -= speed;
  }
  if (moveUp && y > 0) {
    y -= speed;
  }
  if (moveRight && x < window.innerWidth - image.width) {
    x += speed;
  }
  if (moveDown && y < window.innerHeight - image.height) {
    y += speed;
  }
  image.style.left = x + "px";
  image.style.top = y + "px";
  requestAnimationFrame(moveImage);
}
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
requestAnimationFrame(moveImage);