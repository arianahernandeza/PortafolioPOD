let jugadores = [
  { apellido: 'Gómez', altura: 1.67, camiseta: 17, nacimiento: 1988, puesto: 'Mediocampista', foto: 'mediocampista_00.png'},
  { apellido: 'Messi', altura: 1.70, camiseta: 10, nacimiento: 1987, puesto: 'Delantero', foto: 'delantero_00.png'},
  { apellido: 'Álvarez', altura: 1.70, camiseta: 9 , nacimiento: 2000, puesto: 'Delantero', foto: 'delantero_01.png'},
  { apellido: 'Correa', altura: 1.71, camiseta: 15, nacimiento: 1995, puesto:'Delantero', foto: 'delantero_02.png'},
  { apellido: 'Almada', altura: 1.71, camiseta: 16, nacimiento: 2001, puesto: 'Delantero', foto: 'delantero_03.png'},
  { apellido: 'Acuña', altura: 1.72, camiseta: 8, nacimiento: 1991, puesto: "Defensor", foto: 'defensor_00.png'},
  { apellido: 'Tagliafico', altura: 1.72, camiseta: 3, nacimiento: 1992, puesto: 'Defensor', foto: 'defensor_01.png'},
  { apellido: 'Martínez', altura: 1.74, camiseta: 22, nacimiento: 1997, puesto: 'Delantero', foto: 'delantero_04.png'},
  { apellido: 'Mac Allister', altura: 1.74, camiseta: 20, nacimiento: 1998, puesto: 'Mediocampista', foto: 'mediocampista_01.png'},
  { apellido: 'Molina', altura: 1.74, camiseta: 26, nacimiento: 1998, puesto: 'Defensor', foto: 'defensor_02.png'},
  { apellido: 'Martínez', altura: 1.75, camiseta: 25, nacimiento: 1998, puesto: 'Defensor', foto: 'defensor_03.png'},
  { apellido: 'Montiel', altura: 1.76, camiseta: 4, nacimiento: 1997, puesto: 'Defensor', foto: 'defensor_04.png'},
  { apellido: 'Dybala', altura: 1.77, camiseta: 21, nacimiento: 1993, puesto: 'Delantero', foto: 'delantero_05.png'},
  { apellido: 'Palacios', altura: 1.77, camiseta: 14, nacimiento: 1998, puesto: 'Mediocampista', foto: 'mediocampista_02.png'},
  { apellido: 'Fernández', altura: 1.78, camiseta: 24, nacimiento: 2001, puesto: 'Mediocampista', foto: 'mediocampista_03.png'},
  { apellido: 'Di María', altura: 1.80, camiseta: 11, nacimiento: 1988, puesto: 'Delantero', foto: 'delantero_06.png'},
  { apellido: 'De Paul', altura: 1.80, camiseta: 7, nacimiento: 1995, puesto: 'Mediocampista', foto: 'mediocampista_04.png'},
  { apellido: 'Paredes', altura: 1.80, camiseta: 5, nacimiento: 1994, puesto: 'Mediocampista', foto: 'mediocampista_05.png'},
  { apellido: 'Romero', altura: 1.80, camiseta: 13, nacimiento: 1998, puesto: 'Defensor', foto: 'defensor_05.png'},
  { apellido: 'Otamendi', altura: 1.83, camiseta: 19, nacimiento: 1988, puesto: 'Defensor', foto: 'defensor_06.png'},
  { apellido: 'Rodríguez', altura: 1.85, camiseta: 18, nacimiento: 1994, puesto: 'Mediocampista', foto: 'defensor_06.png'},
  { apellido: 'Pezzella', altura: 1.87, camiseta: 6, nacimiento: 1991, puesto: 'Defensor', foto: 'defensor_07.png'},
  { apellido: 'Foyth', altura: 1.87, camiseta: 2, nacimiento: 1998, puesto: 'Defensor', foto: 'defensor_08.png'},
  { apellido: 'Armani', altura: 1.89, camiseta: 1, nacimiento: 1986, puesto: 'Arquero', foto: 'arquero_00.png'},
  { apellido: 'Rulli', altura: 1.89, camiseta: 12, nacimiento: 1992, puesto: 'Arquero', foto: 'arquero_01.png'},
  { apellido: 'Martínez', altura: 1.95, camiseta: 23, nacimiento: 1992, puesto: 'Arquero', foto: 'arquero_02.png'}
];

let altoBarra = 200;
let separa = 10; // se utiliza para el aumento de Y

// Declaración variables de fuente normal y bold
let fuente
let fuenteBold

function preload() {
  // Carga de fuentes
  fuente = loadFont('RobotoSlab.ttf')
  fuenteBold = loadFont('RobotoSlab-Bold.ttf')
  // Carga de imágenes
  for (let index = 0; index < jugadores.length; index++) {
    jugadores[index].foto = loadImage('images/' + jugadores[index].foto);
  }
}

function setup() {
  createCanvas(1280, 600);
}

function draw() {
  let x = 12;
  let y = 40;

  let anchoBoton = 100
  let altoBoton = 30
  // Posición X de los botones nacimiento, altura y puesto
  let nacimientoX = 1280 / 2 - 50
  let alturaX = nacimientoX + 110 
  let puestoX = nacimientoX - 110 
  let botonY = 720 / 2.9 // Posición Y de los botones


  background(255,248,246);

  // Título
  fill(65,74,95)
  textAlign(CENTER);
  textFont(fuenteBold); 
  textSize(45)
  text('LA SCALONETA', 1280 / 2, 720 / 5)

  // Push() y pop() utilizado para contener los textos. Sacado del libro Introducción a p5.js (pág.201)

  // Subtítulo
  push()
  textSize(20)
  textFont(fuenteBold); 
  text('Nos fuimos mundial ', 1280 / 2,720 / 4)
  pop()

  // Subtítulo del subtitulo
  push()
  textSize(15)
  textFont(fuente); 
  text('Seleccionar tipo de visualización:', 1280 / 2, 720 / 3.2)
  pop()

  // 3 estrellas
  star(1280 / 2 - 15, 720 / 16, 25, color(255,226,80))
  star(1280 / 2 - 55, 720 / 16, 25, color(255,226,80))
  star(1280 / 2 + 25, 720 / 16, 25, color(255,226,80))

  // Botones: son prototipos -> no funcionan :(
  // Boton nacimiento
  fill (65,74,95)
  noStroke()
  textFont(fuenteBold); 
  rect(nacimientoX, botonY, anchoBoton, altoBoton, 30)
  push()
  fill(255,248,246)
  translate(1280 / 2, botonY + 19);
  textSize(12)
  text('Nacimiento', 0, 0);
  pop()

  // Boton altura DER
  fill (65,74,95)
  noStroke()
  rect(alturaX, botonY, anchoBoton, altoBoton, 30)
  //texto botón
  push()
  fill(255,248,246)
  translate(alturaX + 50, botonY + 19);
  textSize(12)
  text('Altura', -1, 0);
  pop()

  // Boton puesto IZQ
 fill (65,74,95)
  noStroke()
  rect(puestoX, botonY, anchoBoton, altoBoton, 30)
  //texto botón
  push ()
  fill(255,248,246)
  translate(alturaX - 170, botonY + 19);
  textSize(12)
  text('Puesto', 0, 0);
  pop()
  
  //Referencias color
  // Referencia 1: Arquero
  textSize(12)
  textFont(fuente)
  textAlign(LEFT)
  fill(255, 0, 0, 80) // color arqueros, usan ropa roja
  ellipse(x + 7.5, 600 / 6.5, 15);
  fill(65,74,95)
  text("Arqueros", x + 20, 600 / 6.5 + 3);
  
  // Referencia 2: Defensor
  fill(255,226,120);  // Amarillo para representar la mayor concentración de jugadores
  ellipse(x + 7.5, 600 / 6.5 + 30, 15);
  fill(65,74,95)
  text("Defensores", x + 20, 600 / 6.5 + 33);
  
  // Mediocampistas y delanteros usan colores parecidos para demostrar que tienen la misma cantidad de jugadores
  // Referencia 3: Medicampista
  fill(126,205,248,255);
  ellipse(x + 7.5, 600 / 6.5 + 60, 15);
  fill(65,74,95)
  text("Medicampista", x + 20, 600 / 6.5 + 63);

  // Referencia 4: Delantero
  fill(126,205,248,150);
  ellipse(x + 7.5, 600 / 6.5 + 90, 15);
  fill(65,74,95)
  text("Delantero", x + 20, 600 / 6.5 + 93);

  // For barras altura
  for (let index = 0; index <= jugadores.length; index++) {
    let altura = jugadores[index].altura * 200;
    let ancho = altura * 0.7; // determina la distancia entre barras
    let puesto = jugadores[index].puesto; // llama al valor puesto de cada jugador para poder asignar un color espcífico en un if 
    
    // Colores de las barras
    if (puesto === 'Mediocampista') {
      fill(126,205,248,255);
    } else if (puesto === 'Delantero') {
      fill(126,205,248,150);
    } else if (puesto === 'Defensor') {
      fill(255,226,120);
    } else {
      fill(255, 0, 0, 80);
    }

    // Barras
    rect(x, 720 - altura, 40, ancho , 30, 30, 0); // Intercambia '30' y 'ancho'

    // Imágenes jugadores
    let foto = jugadores[index].foto;
    image(foto, x - 9, 600 - foto.height / 7.4, foto.width / 7.4, foto.height/ 7.4);

    // altura
    textSize(10);
    textFont(fuente); 
    textAlign(CENTER, CENTER);
    fill (65,74,95)
    text(jugadores[index].altura + ' mts', x + 20, 720- altura - 20);
    
    // camiseta
    textSize(20);
    textFont(fuenteBold); 
    text(jugadores[index].camiseta, x + 20, 720 - (altura - 30));

    // apellido
    push(); 
    textSize(15);
    textFont(fuente); 
    translate(x + 20, 600  - 80);
    rotate(-HALF_PI); // Gira el texto 90 grados. Pusimos que sea negativo para que esté orientado hacia la derecha y sea más legible 
    textAlign(LEFT)
    text(jugadores[index].apellido, 0, 0);
    pop();

    // Aumentar
    x = x + 40 + ancho / 30;
    y = y + altura + separa;
  }
}

// funcion estrella vistas en clase
function star(x, y, w, relleno) {
  fill(relleno);
  noStroke();

  x = x + w/3
  y = y + w/3
  beginShape()
  vertex(x, y)
  vertex(x + w/5.3, y - w/3.2)
  vertex(x + w/2.6, y)
  vertex(x + w/1.5, y)
  vertex(x + w/2.3, y + w/4)
  vertex(x + w/1.8, y + w/1.8)
  vertex(x + w/5.3, y + w/2.7)
  vertex(x - w/5.3, y + w/1.8)
  vertex(x - w/16, y + w/4)
  vertex(x - w/3.2, y)
  endShape(CLOSE)
}