const galeria = document.getElementById("galeria");
const totalImagens = 24; // coloque aqui a quantidade total de imagens que tem na pasta

for (let i = 1; i <= totalImagens; i++) {
  const img = document.createElement("img");
  img.src = `ArtsFeitas/1 (${i}).png`;
  img.alt = `Arte ${i}`;
  galeria.appendChild(img);
}
