// Get the carousel and carousel-inner elements
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');

// Calculate the width of a single carousel item
const carouselItemWidth = carousel.clientWidth;

// Set the initial position of the carousel
let currentPosition = 0;
carouselInner.style.transform = `translateX(${currentPosition}px)`;

// Function to slide the carousel to the specified position
function slideCarousel(position) {
  carouselInner.style.transform = `translateX(${position}px)`;
}

// Event listeners for category buttons
const breakfastButton = document.getElementById('breakfast-button');
breakfastButton.addEventListener('click', () => {
  slideCarousel(0);
});

const lunchButton = document.getElementById('lunch-button');
lunchButton.addEventListener('click', () => {
  slideCarousel(-carouselItemWidth);
});

const snacksButton = document.getElementById('snacks-button');
snacksButton.addEventListener('click', () => {
  slideCarousel(-carouselItemWidth * 2);
});

const dinnerButton = document.getElementById('dinner-button');
dinnerButton.addEventListener('click', () => {
  slideCarousel(-carouselItemWidth * 3);
});
