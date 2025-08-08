// Menu scroll background
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// Carousel
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

setInterval(() => changeSlide(1), 5000);

showSlide(slideIndex);
