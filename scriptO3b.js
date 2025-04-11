var hydra = new Hydra({
  canvas: document.getElementById("odisea09"),
  detectAudio: false
})
/*video flicker gato prueba 1*/ 
s0.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9')

osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

  src(o0).saturate(1.2)
  .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
  src(s0).mask(o1)).out(o0)

var hydra2 = new Hydra({
  canvas: document.getElementById("odisea10"),
  detectAudio: false
  })
  /*video flicker gato prueba 1*/ 
  s1.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9')
    
  osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
  src(o0).saturate(1.2)
  .modulate(osc(8,0,1.5).brightness(0.6).modulate(noise(2).sub(gradient()),2),0.005).layer(
  src(s1).mask(o1)).out(o0)

var hydra3 = new Hydra({
  canvas: document.getElementById("odisea11"),
  detectAudio: false
  })
  /*video flicker gato prueba 1*/ 
  s2.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9')
        
  osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
  src(o0).saturate(2)
  .modulate(osc(2,0,1.5).brightness(0.9).modulate(noise(1).sub(gradient()),5),0.009).layer(
  src(s2).mask(o1)).out(o0)

var hydra4 = new Hydra({
  canvas: document.getElementById("odisea12"),
  detectAudio: false
  })
  /*video flicker gato prueba 1*/ 
  s3.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9')
    
  osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
  src(o0).saturate(1.2)
  .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
  src(s3).mask(o1)).out(o0)

  
    
        