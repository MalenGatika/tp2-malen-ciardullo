const btn = document.getElementById('tecnicasBtn');
const menu = document.getElementById('tecnicasMenu');

// Toggle abrir/cerrar
btn.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el click cierre el menú
  menu.classList.toggle('hidden');
});

// Cerrar si se clickea afuera
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== btn) {
    menu.classList.add('hidden');
  }
});