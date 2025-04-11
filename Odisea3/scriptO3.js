var hydra = new Hydra({
  canvas: document.getElementById("odisea01"),
})
/*video flicker gato prueba 1*/ 

//https://www.flickr.com/photos/gabbcan/2417059433/in/photolist-2jEKC3N-6tXP8g-2qTdcW3-GgNQig-2oesCEh-DSmxJT-2qR9sh8-bra1nq-p33Eg3-2nSpkbf-4FA4yv-p52iuc-2pw18YG-2nXwUjg-bt2rrq-2owrnhT-2qGdjSD-zcKKvC-GBLocD-bm5uon-79MxtG-9NrGuJ-eijkaw-27c95YU-dVHLDa-2gLffFj-aj6Ktn-8FMJGw-7iNkZu-27aZ4vj-5qrgiU-2nSmFP3-Kr1W3u-ZvQDUX-31Sk3d-qbEqeQ-Rx59RD-2hgPvz2-uHAeEj-5qmWir-bt5Ceo-5qreWd-7sHdLb-9rVTvP-6B6FTp-6cZMmH-9rV48c-8FBjvu //

s0.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9')

osc(6,0.1).thresh(0.1,0).modulate(src(s0),1).out(o1)

  src(o0).saturate(1.2)
  .modulate(osc(6,0,1.5).brightness(0.5).modulate(noise(3).sub(gradient()),1),0.003).layer(
  src(s0).mask(o1)).out(o0)


  /*prueba  div var2 */ 

  var hydra2 = new Hydra ({
    canvas: document.getElementById("odisea02"),
  })

  /* video flicker ave cantando*/
  //https://www.flickr.com/photos/eerokiuru/41247400630/in/photolist-25QTHaQ-UuAV5W-2mbKEBH-2qNF1ap-2qD5X32-2k4VgyS-2pLjm8Y-2mPaLx4-2kRW3gA-2jngimS-2nFzV6X-27ibVa7-2qLZYxn-2qteRY6-28EBEMJ-2bqNygZ-MPzjyF-2otM5mH-2mda1Eo-LAJum3-2qtiXnK-2ocQutx-2gdio8z-2bpKJh2-2ktJGPQ-2o8P9CS-2qHYdb9-2qx3Xc2-2po861J-2ovmwHQ-2mVeb7k-2ppzSpW-2nqFqoR-2mG7F19-XvpyPN-2qGA3Ho-2ncN2QU-2kBGVX1-2qF8h3k-2q9xXvn-2qHGBCZ-2qAnLaG-2oh9sEm-2qHPqkr-2qfZx6F-2nfc6XW-21M4xyM-2qHajSa-2nKtQvg-2pYkuLy//
  s1.initVideo('https://live.staticflickr.com/video/41247400630/33485ace34/1080p.mp4?s=eyJpIjo0MTI0NzQwMDYzMCwiZSI6MTc0NDM1MTQ0NywicyI6IjYyZGNiYzcyOWRiY2NkOWU4NTViZTJjNTRlMjM0YjllYTk2ZmMxYzQiLCJ2IjoxfQ')

  osc(4, 0.1, 0.8).color(1.04,0, -1.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(src(s1),3).out(o0)  


  /*prueba div var3*/

  var hydra3 = new Hydra({
    canvas:document.getElementById("odisea03"),
  })

  s2.initVideo('https://live.staticflickr.com/video/2417059433/7b3e2439b4/iphone_wifi.mp4?s=eyJpIjoyNDE3MDU5NDMzLCJlIjoxNzQ0MzUwNzI0LCJzIjoiNmNjYmUyNjNhNzBiN2E3NGFjY2YwZWM2OGYxOTU2MzFmNWUxY2I1NCIsInYiOjF9') 

  osc(5, 1.8,2).color(5, 15, -3.1).rotate(0.30, 0.1).pixelate(3, 15).modulate(src(s2),1).out(o0)

  var hydra4 = new Hydra({
    canvas:document.getElementById("odisea04"),
  })
  s3.initVideo('https://live.staticflickr.com/video/41247400630/33485ace34/1080p.mp4?s=eyJpIjo0MTI0NzQwMDYzMCwiZSI6MTc0NDM1MTQ0NywicyI6IjYyZGNiYzcyOWRiY2NkOWU4NTViZTJjNTRlMjM0YjllYTk2ZmMxYzQiLCJ2IjoxfQ') 

  osc(5, 2,2).color(5, 15, -3.1).rotate(0.30, 0.1).pixelate(3, 15).modulate(src(s3),1).out(o0)