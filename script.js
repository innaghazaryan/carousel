const carousel = document.getElementById("carousel-images");
let currentPosition = 0;
const imageWidth = carousel.offsetWidth;

function slideNext() {
  currentPosition -= imageWidth;
  if (currentPosition < -((carousel.children.length - 1) * imageWidth)) {
    currentPosition = 0;
  }
  carousel.style.transform = `translateX(${currentPosition}px)`;
}

function slidePrev() {
  currentPosition += imageWidth;
  if (currentPosition > 0) {
    currentPosition = -((carousel.children.length - 1) * imageWidth);
  }
  carousel.style.transform = `translateX(${currentPosition}px)`;
}
setInterval(slideNext, 3000);
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".back-btn");
prevButton.addEventListener("click", slidePrev);
nextButton.addEventListener("click", slideNext);
