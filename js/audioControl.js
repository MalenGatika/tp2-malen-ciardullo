document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bgVideo");
  const btn = document.getElementById("btnAudio");

  btn.addEventListener("click", () => {
    video.muted = !video.muted;
    btn.textContent = video.muted ? "🔇 Activar sonido" : "🔊 Silenciar";

    // Efecto visual en el botón
    btn.classList.add("scale-105");
    setTimeout(() => btn.classList.remove("scale-105"), 200);
  });
});
