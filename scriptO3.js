var hydra030 = new Hydra({
    canvas: document.getElementById("odisea3.1"),
    detectAudio: false
  })
  /*video flicker gato prueba 1*/ 
  s0.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQzNDc5NTU4LCJzIjoiMTM5OTllOGMyYjRkNWU4ODQ0NmIyYjEwODcyYWE2ZTE0MjE2ODM4ZSIsInYiOjF9')
  
  osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
  
    src(o0).saturate(1.2)
    .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
    src(s0).mask(o1)).out(o0)