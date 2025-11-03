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

let zoomActivo = false;
const zoomContainer = document.querySelector(".zoom-container");

// ==========================
// FUNCIONES GALERÍA
// ==========================
function abrirPagina(i) {
  indice = i;
  imagen.src = paginas[indice];

  // Reiniciar animación
  imagen.style.animation = 'none';
  void imagen.offsetWidth;
  imagen.style.animation = 'abrirOverlay 0.4s ease forwards';

  vista.classList.remove("hidden");

  // Resetear zoom
  zoomActivo = false;
  zoomContainer.classList.remove("zoom-activo");
  imagen.style.transform = "scale(1)";
  imagen.style.cursor = "zoom-in";
}

function cerrarPagina() {
  vista.classList.add("hidden");
  zoomActivo = false;
  zoomContainer.classList.remove("zoom-activo");
  imagen.style.transform = "scale(1)";
  imagen.style.cursor = "zoom-in";
}

function siguiente() {
  indice = (indice + 1) % paginas.length;
  abrirPagina(indice);
}

function anterior() {
  indice = (indice - 1 + paginas.length) % paginas.length;
  abrirPagina(indice);
}

// ==========================
// EVENTOS BOTONES
// ==========================
cerrar.onclick = cerrarPagina;
siguienteBtn.onclick = siguiente;
anteriorBtn.onclick = anterior;
vista.addEventListener("click", e => { if(e.target === vista) cerrarPagina(); });

// ==========================
// ZOOM dinámico
// ==========================
function activarZoom() {
  if (!zoomContainer || !imagen) return;

  imagen.style.transition = "transform 0.2s ease-out";
  imagen.style.transformOrigin = "center center";

  // MOUSEMOVE
  zoomContainer.addEventListener("mousemove", (e) => {
    if (!zoomActivo) return;

    const rect = zoomContainer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imagen.style.transformOrigin = `${x}% ${y}%`;
    imagen.style.transform = "scale(2.8)";
  });

  // PARA QUE SIGA EL MOUSE
  zoomContainer.addEventListener("mouseleave", () => {
    if (!zoomActivo) return;
    imagen.style.transform = "scale(1)";
  });

  // CLICK PARA ACTIVAR/DESACTIVAR ZOOM
  zoomContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    zoomActivo = !zoomActivo;

    if (zoomActivo) {
      zoomContainer.classList.add("zoom-activo");
      imagen.style.cursor = "zoom-out";
      imagen.style.transform = "scale(2.8)";
    } else {
      zoomContainer.classList.remove("zoom-activo");
      imagen.style.cursor = "zoom-in";
      imagen.style.transform = "scale(1)";
    }
  });
}

// Llamar solo una vez al cargar la página
activarZoom();
