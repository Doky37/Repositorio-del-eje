 // create a new hydra-synth instance
 var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  })
   osc(10, 0.1, 0.8).rotate(0, 0.1).kaleid().color(-1, 1).out()
  
  // create functions to use with buttons
  function useCamera() {
    s0.initCam()
    src(s0).color(-1, Math.random()*2, 1).colorama().out()
  }
  
  function feedback() {
    src(o1)
      .layer(src(o0).mask(shae(4, 0.4, 0)))
      .scrollX([0.005, -0.005])
      .scrollY(0.005)
      .out(o1)
    
    render(o1)

    s0.initVideo("assets/prueba1.mp4")
    s0.play()
    src(s0).out()
  }