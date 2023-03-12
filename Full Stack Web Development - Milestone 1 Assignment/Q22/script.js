const progressBar = document.getElementById("progress-bar");
const windowHeight = window.innerHeight;
const fullHeight = document.body.clientHeight - windowHeight;
window.addEventListener("scroll", () => {
  const distance = window.pageYOffset;
  const progress = (distance / fullHeight) * 100;
  progressBar.style.width = `${progress}%`;
});
