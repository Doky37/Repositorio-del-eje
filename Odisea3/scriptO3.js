var hydra = new Hydra({
  canvas: document.getElementById("odisea01"),
  detectAudio: false
})

// link de catbox

//link del video para pasar por hydra
s0.initVideo('https://files.catbox.moe/q30cd1.mp4 ')

//los efectos de hydra que se aplican al video

osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

src(o0).saturate(1.5)
.modulate(osc(2,0,1.5).brightness(1.2).modulate(noise(2.5).sub(gradient()),1),0.050).layer(
src(s0).mask(o1)).out(o0)

  //para la desplegacion del panel

  function togglePanel() {
    const panel = document.getElementById("panel");
    if (panel.style.right === "0px") {
        panel.style.right = "-250px"; // Ocultar el panel
    } else {
        panel.style.right = "0px"; // Mostrar el panel
    }
  }

//para los mensajes aleatorios de las zonas seleccionadad

const mensajes =[
  "Ya es tarde ",
  "Hace mucho frío",
  "Ojala pase el camion",
  "Espero que no vaya lleno el camion",
  "Ya esta oscureciendo",
  "Hay mucha gente"

]

function obtenerMensajeAleatorio() {
    const indice = Math.floor(Math.random() * mensajes.length);
    return mensajes[indice];
}

  function mostrarPopup(event) {
    const mensaje = obtenerMensajeAleatorio();
    let popup = document.getElementById("popup");
    popup.innerText = mensaje;
    popup.style.left = event.clientX + "px";
    popup.style.top = event.clientY + "px";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000); // Se oculta después de 2 segundos
}

//codigo para la aletoriedad de las paginas 

// Lista de páginas a las que puede redirigir
const paginas = [
  "../Odisea2/odisea2.html", // Página 1
  "../Odisea1/odisea1.html" // Página 2
];

// Selecciona el enlace por su ID
const enlaceRegreso = document.getElementById("regreso");

// Función para asignar un enlace aleatorio
function asignarEnlaceAleatorio() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  enlaceRegreso.setAttribute("href", paginaAleatoria);
}

// Llama a la función al cargar la página
asignarEnlaceAleatorio();