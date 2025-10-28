// Submenú técnicas (desktop)
const btnTecnicas = document.getElementById('tecnicasBtn');
const menuTecnicas = document.getElementById('tecnicasMenu');

btnTecnicas.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el click cierre el menú
  menuTecnicas.classList.toggle('hidden');
});

// Cerrar submenú si se clickea afuera
document.addEventListener('click', (e) => {
  if (!menuTecnicas.contains(e.target) && e.target !== btnTecnicas) {
    menuTecnicas.classList.add('hidden');
  }
});

// Hamburger toggle (mobile)
const btnHamburger = document.getElementById("menuBtn");
const menuPrincipal = document.getElementById("menu");

btnHamburger.addEventListener("click", () => {
  menuPrincipal.classList.toggle("hidden");
});