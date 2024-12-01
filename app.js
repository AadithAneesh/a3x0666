const lenis = new Lenis()

function raf(time) {
  lenis.raf(time/2.5)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)