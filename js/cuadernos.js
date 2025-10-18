const paginas = Array.from(document.querySelectorAll(".pagina"));
let actual = 0;

function pasarPagina() {
  if (actual < paginas.length - 1) {
    const hojaActual = paginas[actual];
    const siguiente = paginas[actual + 1];
    hojaActual.classList.add("pasando");
    siguiente.classList.remove("detras");
    setTimeout(() => {
      hojaActual.style.zIndex = 1;
      hojaActual.classList.remove("pasando");
      hojaActual.classList.add("detras");
      actual++;
    }, 1000);
  }
}

function retrocederPagina() {
  if (actual > 0) {
    const hojaAnterior = paginas[actual - 1];
    hojaAnterior.classList.remove("detras");
    hojaAnterior.style.zIndex = 10;
    hojaAnterior.classList.add("pasando");
    hojaAnterior.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      hojaAnterior.classList.remove("pasando");
      actual--;
    }, 1000);
  }
}

document.getElementById("siguiente").addEventListener("click", pasarPagina);
document.getElementById("anterior").addEventListener("click", retrocederPagina);
