var hydra = new Hydra({
  canvas: document.getElementById("odisea01"),
  detectAudio: false
})

/*video de catbox*/ 

s0.initVideo('https://files.catbox.moe/r7ojta.mp4')

osc(10, 0.03, 1.5).layer(src(s0)
  .contrast(5)
  .saturate(0.5)
  .brightness(0.5))
  .colorama(0.5)
  .modulate(osc(6, 0.1, 1).brightness(0.5), 0.003)
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
    "¿Qué tan tarde es?",
    "El sol está pegando en mi piel muy fuerte",
    "El autobús tarda cada hora en llegar",
    "¿Cómo estaría ahora mismo si hubiera consumido marihuana?",
    "¿Qué pasa con la sombra?",
    "Casi no hay gente en la calle",
    "¿Y si me asaltan?",
    "¿Me veré muy llamativo?",
    "¡No saques el teléfono!",
    "Este camino siempre se me ha hecho eterno",
    "No le he avisado a nadie que ando por aquí",
    "mi proyecto del PECDA...",
    "¿Se me habrá olvidado algo?",
    "¿Tengo todas mis cosas?",
    "Ojalá estuviera drogado",
    "Estaría rico un cigarro ahora mismo",
    "Se me antojaron unas papas",
    "El cielo está muy despejado",
    "Estás hablando solo...",
    "Nicki Minaj fue a un concierto a China que resultó ser falso",
    "No le he avisado a mi mamá",
    "No le he avisado a mi papá",
    "¿Por qué me puse a pensar de repente en escenarios traumáticos?",
    "Paso demasiado tiempo en el autobús",
    "Me sale muy caro transportarme, ¿Cómo que $13 a mi casa?",
    "Estas pensando en voz alta, ya cállate",
    "Párate derecho",
    "No agaches la cabeza",
    "Ya falta poco",
    "Debería dormir en cuanto esté en el autobús",
    "Podría poner música en este momento, ¿Traeré mis audífonos?"
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
  