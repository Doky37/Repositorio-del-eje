var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: false
})
/*video flicker gato prueba 1*/ 
s0.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQzNDc5NTU4LCJzIjoiMTM5OTllOGMyYjRkNWU4ODQ0NmIyYjEwODcyYWE2ZTE0MjE2ODM4ZSIsInYiOjF9')

osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

  src(o0).saturate(1.2)
  .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
  src(s0).mask(o1)).out(o0)


  /*prueba  div var2 */ 

  var hydra2 = new Hydra ({
    canvas: document.getElementById("myCanva2"),
    detectAudio: false
  })

  /* video flicker ave cantando*/
  s1.initVideo('https://live.staticflickr.com/video/52045424441/20864ce48c/1080p.mp4?s=eyJpIjo1MjA0NTQyNDQ0MSwiZSI6MTc0MzQ3OTkwNiwicyI6ImFiZGQ2ZGFkYTMxNjY1NDBmMjFiODc5MTY3YmIxYzQ4MGYyMDljMmYiLCJ2IjoxfQ')

  osc(4, 0.1, 0.8).color(1.04,0, -1.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(src(s1),3).out(o0)  


  /*prueba div var3*/

  var hydra3 = new Hydra({
    canvas:document.getElementById("myCanva3"),
    dectecAudio: false
  })

  //https://www.flickr.com/photos/janeykay2007/4694020989/in/photolist-89N5Un-2p2HvSL-89Rq8h-2oRiP4W-8G52un-z26nDH-8K2SmH-61s27N-6a7gDi-2mh3VaQ-KJVZYJ-8PbyZC-8n8Qrs-2kGvseb-2i1zSxV-eHiHEi-aoyduH-2qjgVPz-7xtNXh-LKXJHD-2eWoSk4-paVw1i-oTGmL7-2iS6EP1-2ocYRw4-djUVge-9MjTfp-6n63jo-pbcbQM-p9aaUq-C83ssV-W7qNYV-rkqdh8-2kYXnn6-2mszKr6-paVvqa-pbaaM5-aoVN1n-2pHQznr-2jwjGhN-8QUntD-84Dyqj-p9ab6Y-oTFRDP-oTGVUt-i5HUPm-2n3YDLJ-oTGUYG-ETiWiL-e6o9b8//

  s2.initVideo('https://live.staticflickr.com/video/4694020989/251f3a4d5b/700.mp4?s=eyJpIjo0Njk0MDIwOTg5LCJlIjoxNzQzNTI0MTI2LCJzIjoiYzBiMjRjMzhkODYzMTEyMjdkYTJiZTRlNmQzM2ZkZDJiODlkZTJiNyIsInYiOjF9') 

  osc(5, 1.8,2).color(5, 15, -3.1).rotate(0.30, 0.1).pixelate(3, 15).modulate(src(s2),1).out(o0)



  