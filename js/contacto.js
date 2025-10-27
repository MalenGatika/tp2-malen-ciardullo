document.getElementById("formContacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const resultado = document.getElementById("resultado");

  // Validaciones básicas
  if (nombre === "" || email === "" || mensaje === "") {
    resultado.textContent = "Por favor, completá todos los campos.";
    resultado.style.color = "red";
    resultado.classList.remove("oculto");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    resultado.textContent = "Ingresá un correo electrónico válido.";
    resultado.style.color = "red";
    resultado.classList.remove("oculto");
    return;
  }

  // Si pasa las validaciones:
  resultado.textContent = `¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`;
  resultado.style.color = "green";
  resultado.classList.remove("oculto");

  // Limpia el formulario
  document.getElementById("formContacto").reset();
});

function volverInicio() {
  window.location.href = "index.html"; // Cambiá según tu archivo principal
}
