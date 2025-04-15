var hydra = new Hydra({
  canvas: document.getElementById("odisea01"),
  detectAudio: false
})

/*video flicker gato prueba 1*/ 

//https://live.staticflickr.com/video/54445365323/88ff91a6dc/360p.mp4?s=eyJpIjo1NDQ0NTM2NTMyMywiZSI6MTc0NDQwNDE4NSwicyI6ImExYmJiZDI0ZWRiN2Y4MzYyNTlhYTlkOTk1N2Y2Mjc1OGRhNTRmZTkiLCJ2IjoxfQ //

s0.initVideo('https://live.staticflickr.com/video/54445365323/88ff91a6dc/360p.mp4?s=eyJpIjo1NDQ0NTM2NTMyMywiZSI6MTc0NDc1MDY1MCwicyI6ImNmMzNiZGQzMjYxNjdlZGE1ZTM5OTE4N2VhZDc5OTFjYTliY2YyOTIiLCJ2IjoxfQ')

osc(10, 0.03, 1.5).layer(src(s0)
  .contrast(5)
  .saturate(0.5)
  .brightness(0.5))
  .colorama(0.5)
  .modulate(osc(6, 0.1, 1.5).brightness(0.5), 0.003)
  .layer(src(s0)
  .mask(osc(6, 0, 1.5).brightness(0.5).sub(gradient(0.5)), 1))
  .out(o0)

    //para la desplegacion del panel 
    
  function togglePanel() {
    const panel = document.getElementById("panel");
    if (panel.style.right === "0px") {
        panel.style.right = "-250px"; // Ocultar el panel
    } else {
        panel.style.right = "0px"; // Mostrar el panel
    }
  }

  //para los mensajes aleatorios de las zonas seleccionadas

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
  