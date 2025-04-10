var hydra = new Hydra({
    canvas: document.getElementById("odisea05"),
    detectAudio: false
  })
  /*video flicker gato prueba 1*/ 
  s0.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQzNDc5NTU4LCJzIjoiMTM5OTllOGMyYjRkNWU4ODQ0NmIyYjEwODcyYWE2ZTE0MjE2ODM4ZSIsInYiOjF9')
  
  osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
  
    src(o0).saturate(1.2)
    .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
    src(s0).mask(o1)).out(o0)
  
  var hydra2 = new Hydra({
    canvas: document.getElementById("odisea06"),
    detectAudio: false
    })
    /*video flicker gato prueba 1*/ 
    s1.initVideo('https://live.staticflickr.com/video/52045424441/20864ce48c/1080p.mp4?s=eyJpIjo1MjA0NTQyNDQ0MSwiZSI6MTc0MzQ3OTkwNiwicyI6ImFiZGQ2ZGFkYTMxNjY1NDBmMjFiODc5MTY3YmIxYzQ4MGYyMDljMmYiLCJ2IjoxfQ')
      
    osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
    src(o0).saturate(1.2)
    .modulate(osc(8,0,1.5).brightness(0.6).modulate(noise(2).sub(gradient()),2),0.005).layer(
    src(s1).mask(o1)).out(o0)
  
  var hydra3 = new Hydra({
    canvas: document.getElementById("odisea07"),
    detectAudio: false
    })
    /*video flicker gato prueba 1*/ 
    s2.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQzNDc5NTU4LCJzIjoiMTM5OTllOGMyYjRkNWU4ODQ0NmIyYjEwODcyYWE2ZTE0MjE2ODM4ZSIsInYiOjF9')
          
    osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
    src(o0).saturate(2)
    .modulate(osc(2,0,1.5).brightness(0.9).modulate(noise(1).sub(gradient()),5),0.009).layer(
    src(s2).mask(o1)).out(o0)
  
  var hydra4 = new Hydra({
    canvas: document.getElementById("odisea08"),
    detectAudio: false
    })
    /*video flicker gato prueba 1*/ 
    s3.initVideo('https://live.staticflickr.com/video/52045424441/20864ce48c/1080p.mp4?s=eyJpIjo1MjA0NTQyNDQ0MSwiZSI6MTc0MzQ3OTkwNiwicyI6ImFiZGQ2ZGFkYTMxNjY1NDBmMjFiODc5MTY3YmIxYzQ4MGYyMDljMmYiLCJ2IjoxfQ')
      
    osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)
    src(o0).saturate(1.2)
    .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
    src(s3).mask(o1)).out(o0)
  
    
        