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

// ==========================
// ZOOM dinámico con mouse (versión funcional completa)
// ==========================
let zoomActivo = false;

function activarZoom() {
  const zoomContainer = document.querySelector(".zoom-container");
  const imagenGrande = document.getElementById("imagenGrande");

  if (!zoomContainer || !imagenGrande) return;

  // Resetea estado inicial
  imagenGrande.style.transform = "scale(1)";
  imagenGrande.style.transition = "transform 0.2s ease-out";
  imagenGrande.style.transformOrigin = "center center";

  zoomContainer.addEventListener("mousemove", (e) => {
    if (!zoomActivo) return;

    const rect = zoomContainer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imagenGrande.style.transformOrigin = `${x}% ${y}%`;
    imagenGrande.style.transform = "scale(2.8)"; // nivel de zoom
  });

  zoomContainer.addEventListener("mouseleave", () => {
    if (!zoomActivo) return;
    imagenGrande.style.transform = "scale(1)";
  });

  zoomContainer.addEventListener("click", (e) => {
    e.stopPropagation(); // evita cerrar overlay
    zoomActivo = !zoomActivo;

    if (zoomActivo) {
      zoomContainer.classList.add("zoom-activo");
      imagenGrande.style.cursor = "zoom-out";
      imagenGrande.style.transform = "scale(2.8)";
    } else {
      zoomContainer.classList.remove("zoom-activo");
      imagenGrande.style.cursor = "zoom-in";
      imagenGrande.style.transform = "scale(1)";
    }
  });
}

// Activar zoom cada vez que se abre una imagen
function abrirPagina(i) {
  indice = i;
  imagen.src = paginas[indice];

  imagen.style.animation = 'none';
  void imagen.offsetWidth;
  imagen.style.animation = 'abrirOverlay 0.4s ease forwards';

  vista.classList.remove("hidden");

  // Activar zoom una vez que cargue la imagen
  imagen.onload = activarZoom;
}