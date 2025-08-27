// Menu scroll background
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// Quantidade de imagens na pasta
const totalImagens = 34; // coloca o número exato de imagens
const carousel = document.getElementById("carousel");

// Criar os slides dinamicamente
for (let i = 1; i <= totalImagens; i++) {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  if (i === 1) slide.classList.add("active"); // primeira começa ativa

  const img = document.createElement("img");
  img.src = `ArtsFeitas/1 (${i}).png`; // nome padrão
  img.alt = `Imagem ${i}`;

  slide.appendChild(img);
  carousel.insertBefore(slide, document.querySelector(".next")); // antes dos botões
}

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

// Passa automaticamente a cada 5s
setInterval(() => changeSlide(1), 5000);

showSlide(slideIndex);