var hydra = new Hydra({
  canvas: document.getElementById("odisea03"),
  detectAudio: false
})

// link de flicker al video original


//link del video para pasar por hydra

s0.initVideo('https://live.staticflickr.com/video/54445681295/6ae7ab0ecb/360p.mp4?s=eyJpIjo1NDQ0NTY4MTI5NSwiZSI6MTc0NDM5ODU1NCwicyI6ImI0MzdkMGUxNWUwNTNmNzQ2YTM3YzM2MTgwOGM1YTA2MDlmZmQ0OTIiLCJ2IjoxfQ')

osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

  src(o0).saturate(2)
  .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
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
    "Hace demasiado calor",
    "Ojala pase el camion",
    "Espero que no vaya lleno el camion",
    "El sol esta muy fuerte",
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
  