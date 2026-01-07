const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

const totalImagens = 24;

for (let i = 1; i <= totalImagens; i++) {
  const img = document.createElement("img");
  img.src = `ArtsFeitas/1 (${i}).png`;
  img.alt = `Arte ${i}`;

  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });

  galeria.appendChild(img);
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};