const imagenes = [
  "img/revolucion/frenchrevolution1.jpg",
  "img/revolucion/frenchrevolutiondos.jpg",
  "img/revolucion/frenchrevolution3.jpg",
  "img/revolucion/frenchrevolution4.jpg",
  "img/revolucion/frenchrevolution5.jpg",
  "img/revolucion/frenchrevolution6.jpg",
  "img/revolucion/frenchrevolution7.jpg",
  "img/revolucion/frenchrevolution8.jpg",
  "img/revolucion/frenchrevolution9.jpg",
  "img/revolucion/frenchrevolution10.jpg",
  "img/revolucion/frenchrevolution11.jpg",
  "img/revolucion/frenchrevolution12.jpg",
  "img/revolucion/frenchrevolution13.jpg",
];

const contenedor = document.querySelector("main");
const template = document.querySelector("#imagen-template");

imagenes.forEach(src => {
  const clone = template.content.cloneNode(true);
  const img = clone.querySelector("img");
  img.src = src;
  img.alt = "Página de cómic";
  img.onclick = () => abrirImagen(src);
  contenedor.appendChild(clone);
});

const overlay = document.getElementById("overlay");
const imgGrande = document.getElementById("imagen-grande");
const cerrar = document.getElementById("cerrar");

function abrirImagen(src) {
  imgGrande.src = src;
  overlay.classList.remove("hidden");
  setTimeout(() => imgGrande.classList.add("scale-105"), 10);
}

cerrar.onclick = () => {
  imgGrande.classList.remove("scale-105");
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

overlay.onclick = (e) => {
  if (e.target === overlay) cerrar.onclick();
};
