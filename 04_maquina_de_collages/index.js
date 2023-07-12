let frames = ['img_1.png','img_2.png', 'img_3.png', 'img_4.png', 'img_5.png']
let framesLoaded = []
let i = 0 // para mostrar las fotos desde el indice 0
let prop // declaramos variable para escalar (sin valor)
let repito = 0 // repeticiones

function preload(){
  let path
 for (let index = 0; index < frames.length; index++) {
  path = 'fotos/' + frames[index]
  // cargamos las fotos
  framesLoaded[index] = loadImage(path)
 }
}

function setup() {
  createCanvas(700,700)
  background('#d1d1cf')
  frameRate(20)
  noStroke()

  prop = framesLoaded[0].height / framesLoaded[0].width
}

function draw() {  
  for (let i = 0; i < 2; i++) {
    let x = random(30, width - 30); // posición random en x
    let y = random(30, height - 30); // posición random en y
    let col = ['#d40017', '#b77402', '#cb4b67', '#2a5b3d', '#aa1748', '#343554', '#b8a407']
    
    let diam = random(20, 80)
    fill(random(col)); // color de relleno
    ellipse(x, y, diam, diam); // dibuja círculo en la posición generada
  }

  rotate(random(2));
  scale(random(0.5, 1))
  image(framesLoaded[i], random(width), random(height))
  i++
  repito++

  if (repito >= frames[i]) { // Detener después de x repeticiones
    noLoop();
  }

  if(i > framesLoaded.length - 1){
    i = 0
  } 
}
