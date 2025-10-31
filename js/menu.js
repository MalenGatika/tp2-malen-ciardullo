document.addEventListener("DOMContentLoaded", () => {
  const tecnicasBtn = document.getElementById("tecnicasBtn");
  const tecnicasMenu = document.getElementById("tecnicasMenu");

  if (tecnicasBtn && tecnicasMenu) {
    let hideTimeout;

    // Mostrar menú al pasar el mouse sobre el botón
    tecnicasBtn.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      tecnicasMenu.classList.remove("hidden");
    });

    // Ocultar menú con retardo al salir del botón
    tecnicasBtn.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        tecnicasMenu.classList.add("hidden");
      }, 300); // 0.3 segundos
    });

    // Mantener visible mientras el mouse está sobre el menú
    tecnicasMenu.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      tecnicasMenu.classList.remove("hidden");
    });

    // Ocultar con retardo cuando el mouse sale del menú
    tecnicasMenu.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        tecnicasMenu.classList.add("hidden");
      }, 300);
    });
  }
});