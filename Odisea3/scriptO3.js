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


