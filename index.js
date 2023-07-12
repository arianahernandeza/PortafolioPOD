let y = 0
let x = 0
let diam = 30
let r = 0
let g = 0
let b = 0
let a = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(5)
}

function draw() {
  y = random(height)
  x= random(width)
  diam = random(10, 150)
  g = random(250)
  b =random(250)
  a = random(100)
  noFill()
  stroke(r, g, b, a)
  ellipse(x, y, diam, diam)
}
