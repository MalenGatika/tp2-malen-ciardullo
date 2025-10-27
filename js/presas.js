// Lista de img
const imagenes = [
  "img/presas/uno.jpg",
  "img/presas/dos.jpg",
  "img/presas/tres.jpg",
  "img/presas/cuatro.jpg",
  "img/presas/cinco.jpg",
  "img/presas/seis.jpg",
  "img/presas/siete.jpg",
  "img/presas/ocho.jpg",
  "img/presas/nueve.jpg",
  "img/presas/diez.jpg",
  "img/presas/once.jpg",
  "img/presas/doce.jpg",
  "img/presas/trece.jpg",
  "img/presas/catorce.jpg",
  "img/presas/quince.jpg",
  "img/presas/dieciseis.jpg"
];

// Textos
const textos = [
  "Trata de una serie de 30 dibujos realizados a partir de registros fotográficos policiales de principios del siglo XX, más algunas fotografías de la época en donde se puede observar a mujeres que experimentan situaciones de mucha vulnerabilidad.",

  "Este proyecto nació de un trabajo de adaptación a cómic de la novela de Henry Miller “Trópico de cáncer”. Para ello utilicé la obra de fotógrafos y artistas de la época, explorando distintos registros y estilos visuales.",

  "Fuera de la intención real de quienes tomaron estas fotografías, se puede ver a mujeres representadas como sujetos despojados de la belleza idealizada y de los estereotipos que en cada época nos han representado.",

  "En estas imágenes no hay erotismo ni poder, y muchas veces aparecen desarrapadas, reflejando la vulnerabilidad de sus circunstancias y el contexto histórico de la época.",

  "Tomé como referencia la serie realizada por el pintor francés Théodore Géricault, en particular los retratos de los enfermos psiquiátricos del hospital de Salpêtrière, buscando inspiración en cómo capturaba la humanidad y el sufrimiento.",

  "Mi intención es dotar de entidad a las mujeres retratadas, visibilizarlas más allá de la ficha policial o el mero registro de época.",

  "Cada dibujo busca mostrar sus rasgos y actitudes desafiantes, su expresión de miedo, molestia o indiferencia, creando un diálogo entre la imagen histórica y la reinterpretación artística.",

  "El proyecto reflexiona sobre cómo la sociedad ha construido representaciones de la mujer a lo largo del tiempo y cómo el arte puede cuestionar esas representaciones.",

  "A través de la adaptación, intento que cada mujer presente en estas imágenes tenga voz y presencia, mostrando su humanidad en lugar de ser solo un objeto de registro.",

  "La mirada de estas mujeres, aunque perdida o desafiante, nos conecta con su experiencia y nos invita a reflexionar sobre las condiciones sociales que enfrentaban.",

  "Busco enfatizar la resistencia de sus gestos, su postura firme o la forma en que desafían la mirada del espectador, reivindicando su presencia.",

  "El proceso creativo consistió en combinar el respeto por el registro histórico con la libertad artística, reinterpretando las fotografías y dibujos originales.",

  "Cada página intenta transmitir un relato visual que complemente la narrativa textual, sumando contexto y profundidad a la experiencia del espectador.",

  "Crear un puente entre la documentación histórica y la subjetividad del arte contemporáneo.",

  "El objetivo final es que el espectador perciba a estas mujeres no solo como sujetos del pasado, sino como figuras con entidad propia, más allá de los estereotipos y registros policiales.",

  "Así, a través del arte, estas mujeres existen nuevamente, con sus miradas, gestos y presencia, recuperando su humanidad y desafiando la invisibilidad histórica."
];


// Referencias al DOM
const img = document.getElementById("galeria-imagen");
const texto = document.getElementById("galeria-texto");
const btnAnt = document.getElementById("anterior");
const btnSig = document.getElementById("siguiente");

let indice = 0;

// Función para actualizar contenido
function actualizarGaleria() {
  img.src = imagenes[indice];
  img.alt = `Imagen ${indice + 1}`;
  texto.textContent = textos[indice];
}

// Eventos de las flechas
btnSig.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  actualizarGaleria();
});

btnAnt.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  actualizarGaleria();
});

// Cargar contenido inicial
actualizarGaleria();
