document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita recargar la página

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Expresiones regulares para validaciones
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reiniciar mensaje
    resultado.classList.remove("text-green-500", "text-red-500");
    resultado.textContent = "";

    // Validaciones
    if (nombre === "" || email === "" || mensaje === "") {
      mostrarError("Por favor, completá todos los campos.");
      return;
    }

    if (!soloLetras.test(nombre)) {
      mostrarError("El nombre solo puede contener letras y espacios.");
      return;
    }

    if (!formatoEmail.test(email)) {
      mostrarError("Ingresá un correo electrónico válido (ejemplo: nombre@dominio.com).");
      return;
    }

    // Si todo está correcto:
    resultado.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
    resultado.classList.add("text-green-500");
    resultado.classList.remove("oculto");

    // Limpiar formulario
    form.reset();
  });

  function mostrarError(mensaje) {
    resultado.textContent = mensaje;
    resultado.classList.add("text-red-500");
    resultado.classList.remove("oculto");
  }
});

// Botón para volver al inicio
function volverInicio() {
  window.location.href = "index.html";
}
