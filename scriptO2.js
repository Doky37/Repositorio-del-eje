// Seleccionar el canvas en HTML
let canvas = document.getElementById("odisea10");

// Inicializar Hydra en el canvas
let hydra = new Hydra({ canvas: canvas });

// Lista de videos
let videos = [
  "https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQzNDc5NTU4LCJzIjoiMTM5OTllOGMyYjRkNWU4ODQ0NmIyYjEwODcyYWE2ZTE0MjE2ODM4ZSIsInYiOjF9",
  "https://live.staticflickr.com/video/52045424441/20864ce48c/1080p.mp4?s=eyJpIjo1MjA0NTQ0NTQxLCJlIjoxNzQzNDc5OTA2LCJzIjoiYWJkZDZkYWRhMzE2NjU0MGYyMWI4NzkxNjdiYjFjNDgwZjIwOWMyZiIsInYiOjF9",
  "https://live.staticflickr.com/video/4694020989/251f3a4d5b/700.mp4?s=eyJpIjo0Njk0MDIwOTg5LCJlIjoxNzQzNTI0MTI2LCJzIjoiYzBiMjRjMzhkODYzMTEyMjdkYTJiZTRlNmQzM2ZkZDJiODlkZTJiNyIsInYiOjF9",
];

let currentIndex = 0;

// Configurar Hydra con el primer video
s0.initVideo(videos[currentIndex]);
src(s0).out();

// Evento para cambiar de video al terminar el actual
s0.video.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % videos.length; // Cambia al siguiente video
  s0.video.src = videos[currentIndex]; // Asigna nueva fuente de video
  s0.video.load(); // Carga el nuevo video
  s0.video.play(); // Lo reproduce automáticamente
});

// Efecto visual en el canvas
osc(4, 0.1, 0.8)
  .color(1.04, 0, -1.1)
  .rotate(0.30, 0.1)
  .pixelate(2, 20)
  .modulate(src(s0), 3)
  .out(o0);

