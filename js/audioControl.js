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

//agrego esto por problemas con la repeticion del video en algunos navegadores

const bgVideo = document.getElementById('bgVideo');

// Reproduce el video al terminar (fallback por compatibilidad)
bgVideo.addEventListener('ended', () => {
  bgVideo.currentTime = 0;
  bgVideo.play();
});

// Intento de autoplay en mobile
document.addEventListener('DOMContentLoaded', () => {
  bgVideo.play().catch(() => {
    console.log("Autoplay bloqueado, se activará al interactuar");
  });
});