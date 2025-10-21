const paginas = [
  "img/comic/page_1.jpg",
  "img/comic/page2.jpg",
  "img/comic/page3.jpg",
  "img/comic/page_4.jpg",
  "img/comic/page_5.webp",
  "img/comic/page6.webp",
  "img/comic/page7.webp",
  "img/comic/page8.webp",
  "img/comic/page9.jpeg",
  "img/comic/page10.jpg",
  "img/comic/page11.jpg",
  "img/comic/page12.webp",
  "img/comic/page13.webp"
];

let indice = 0;
const vista = document.getElementById("vistaGrande");
const imagen = document.getElementById("imagenGrande");
const cerrar = document.getElementById("cerrar");
const siguienteBtn = document.getElementById("siguiente");
const anteriorBtn = document.getElementById("anterior");

function abrirPagina(i){
  indice = i;
  imagen.src = paginas[indice];

  // Reiniciar animación
  imagen.style.animation = 'none';
  void imagen.offsetWidth; // fuerza reinicio DOM
  imagen.style.animation = 'abrirOverlay 0.4s ease forwards';

  vista.classList.remove("hidden");
}

function cerrarPagina(){
  vista.classList.add("hidden");
}

function siguiente(){
  indice = (indice + 1) % paginas.length;
  imagen.src = paginas[indice];

  // Reiniciar animación al cambiar página
  imagen.style.animation = 'none';
  void imagen.offsetWidth;
  imagen.style.animation = 'abrirOverlay 0.4s ease forwards';
}

function anterior(){
  indice = (indice - 1 + paginas.length) % paginas.length;
  imagen.src = paginas[indice];

  // Reiniciar animación al cambiar página
  imagen.style.animation = 'none';
  void imagen.offsetWidth;
  imagen.style.animation = 'abrirOverlay 0.4s ease forwards';
}

// Eventos botones
cerrar.onclick = cerrarPagina;
siguienteBtn.onclick = siguiente;
anteriorBtn.onclick = anterior;

// Cerrar overlay al hacer clic fuera de la imagen
vista.addEventListener("click", e => {
  if(e.target === vista) cerrarPagina();
});
