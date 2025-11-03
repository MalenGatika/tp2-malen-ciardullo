document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const tecnicasBtn = document.getElementById("tecnicasBtn");
  const tecnicasMenu = document.getElementById("tecnicasMenu");

  // Función para detectar si estamos en mobile
  const isMobile = () => window.innerWidth < 768;

  // ===== Menú hamburguesa mobile =====
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // ===== Submenú Técnicas =====
  if (tecnicasBtn && tecnicasMenu) {
    let hideTimeout;

    // Hover para desktop
    const showMenuDesktop = () => {
      if (!isMobile()) {
        clearTimeout(hideTimeout);
        tecnicasMenu.classList.remove("hidden");
      }
    };
    const hideMenuDesktop = () => {
      if (!isMobile()) {
        hideTimeout = setTimeout(() => {
          tecnicasMenu.classList.add("hidden");
        }, 300);
      }
    };

    tecnicasBtn.addEventListener("mouseenter", showMenuDesktop);
    tecnicasBtn.addEventListener("mouseleave", hideMenuDesktop);
    tecnicasMenu.addEventListener("mouseenter", showMenuDesktop);
    tecnicasMenu.addEventListener("mouseleave", hideMenuDesktop);

    // Click para mobile
    tecnicasBtn.addEventListener("click", (e) => {
      if (isMobile()) {
        e.preventDefault(); // evita que haga scroll o comportamiento default
        tecnicasMenu.classList.toggle("hidden");
      }
    });
  }

  // ===== Opcional: cerrar menú al cambiar tamaño de ventana =====
  window.addEventListener("resize", () => {
    if (!isMobile() && menu) {
      menu.classList.remove("hidden"); // menu siempre visible en desktop
      tecnicasMenu.classList.add("hidden"); // submenú oculto por defecto
    } else if (isMobile() && menu) {
      menu.classList.add("hidden"); // menu oculto por defecto en mobile
      tecnicasMenu.classList.add("hidden");
    }
  });
});
