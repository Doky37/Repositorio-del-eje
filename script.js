 // create a new hydra-synth instance
 var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  })
  s0.initVideo('https://live.staticflickr.com/video/41776881671/eae2320115/1080p.mp4?s=eyJpIjo0MTc3Njg4MTY3MSwiZSI6MTc0MjkyMTcwOCwicyI6IjE1NjdiMzI5ZWUzOGU3ZGJkYzU2YjdmNWRmMThhZWVmNGU0ZmI1NjkiLCJ2IjoxfQ')

      osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

        src(o0).saturate(1.2)
        .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
        src(s0).mask(o1)).out(o0)


var hydra = new Hydra({
  canvas: document.getElementById("myCanvas2"),
  detectAudio: false
})
  s1.initVideo('https://live.staticflickr.com/video/51368206211/24956f4033/720p.mp4?s=eyJpIjo1MTM2ODIwNjIxMSwiZSI6MTc0MjkyMjU3OCwicyI6IjVhMzJjODExOTRiNDZmOGUxMzQyOTZkYjQyMTUzYmNjODE2MDc2ZGQiLCJ2IjoxfQ')
      
    osc(6,0.1).thresh(0.1,0).modulate(src(s1),1).out(o1)
      
      src(o1).saturate(1.2)
      .modulatePixelate(voronoi(4,0.2),32,2)
      .scale(()=>1+(Math.sin(time*2.5)*0.05))
      .diff(voronoi(3).shift(0.5))
      .diff(osc(2,0.15,1.1).rotate())
      .brightness(0.1).contrast(1.2).saturate(1.2).out(o0)