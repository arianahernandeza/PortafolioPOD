// TRAMA BAUHAUS VERTICAL (INFINITA)

// Parámetros de posición
let sorteo
let lado = 80 // asi puedo cambiar tamaño cuando quiera
// Parámetros posición
let x = 0
let y = 0

function setup() {
  // Código inicial. Se ejecuta una sola vez
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(10) // definir cantidad de veces por seg que se ejecuta el prog
}

/*COLORES
  rojo: (230, 65, 43) / #E6412B
  azul: (0, 100, 173) / #0064AD
  amarillo: (240,175, 26) / #F0AF1A
  negro: (35,31,32)
  blanco: (232) / #232

  FUNCIONES A USAR
  ARCO: arc(a, b, c, d, start, stop)
  RECT: rect(x, y, w, h)
  ELLIPSE: ellipse(x, y, w)
  TRIANGLE: triangle(x1, y1, x2, y2, x3, y3)
  CUADRILÁTERO: quad(x1, y1, x2, y2, x3, y3, x4, y4)
  ANGLEMODE(): para definir degrees
  FRAMERATE(): veces por seg que se ejecuta el prog
  FILL(): relleno
  CLEAR(): limpia el canvas
*/

function draw() {
  // Se ejecuta después de setup conitnuamente
  sorteo = random (0, 10); // sorteo de 2 módulos con 50% de probabilidad de que salga uno u otro

  // Programa que en base a una condición tome la decisión de imprimir uno u otro módulo.  
  if(sorteo < 1){
    // MÓDULO 1: 2 SEMICÍRCULOS ENFRENTADOS
     noStroke();
     fill(232); // GRIS
     rect(x, y, lado, lado);
     fill(0, 100, 173); // AZUL
     arc(lado+x, lado / 2 + y, lado, lado, 90, 270); // agregar x e y a todas las formas que no son rect (ya los incluye)
     fill(0, 100, 173); // AZUL
     arc(x + lado / lado, lado / 2 + y, lado, lado, -90, -270); // X + LADO / LADO para que se pueda desplazar
  } else if (sorteo < 2) {
    // MÓDULO 2: RECT 50/50 (/50)
    noStroke();
    fill(230, 65, 43); // ROJO
    rect(x, y, lado, lado);
    fill(232); // GRIS
    rect(x , y, lado / 2, lado / 2);
    fill(35,31,32); // NEGRO
    rect(x, y + lado / 2, lado / 2, lado / 2); // Y + LADO / 2
  } else if (sorteo < 3){
    // MÓDULO 3: CÍRCULO ARCO ESQUINA
    noStroke();
    fill(232); // GRIS
    rect(x, y, lado, lado);
    fill(240,175, 26); // AMARILLO
    arc(x + lado / lado, lado + y, lado * 2, lado * 2, 270, 360);
    fill(232);
    arc(x + lado / lado, lado + y, lado, lado, 270, 360);
  } else if (sorteo < 4) {
    // MÓDULO 2: RECT 50/50 + CIRCULO PEQ
    noStroke();
    fill(35,31,32); // NEGRO
    rect(x, y, lado, lado);
    fill(232); // GRIS
    rect(x , y, lado / 2, lado);
    fill(0, 100, 173); // AZUL
    arc(x + lado / 4, y +  lado - lado / 4, lado / 2, lado / 2, 0, 360);
  } else if(sorteo < 5){
    // MÓDULO 9: 2 MEDIO CÍRCULOS (GEMELOS)
     noStroke();
     fill(230, 65, 43); // ROJO
     rect(x, y, lado, lado);
     fill(232); // GRIS
     arc(x + lado, lado / 2 + y, lado, lado, 90, 270);
     arc(x + lado / 2, lado / 2 + y, lado, lado, 90, 270);
  } else if(sorteo < 6){
    // MÓDULO 4: DIAGONAL
    noStroke();
    fill(232); // GRIS
    rect(x, y, lado, lado);
    fill(240,175, 26); //AMARILLO
    triangle(x + lado / lado, y + lado / lado, x + lado, y + lado / lado, x + lado, y + lado);
  } else if(sorteo < 7){
    // MÓDULO 5: 2 TRIÁNGULOS (GEMELOS)
    noStroke();
    fill(0, 100, 173); // AZUL
    rect(x, y, lado, lado);
    fill(240,175, 26); // AMARILLO
    triangle(x + lado / lado, lado + y, lado / 2 + x, y + lado, lado / 2 + x, y + lado / lado);
    triangle(lado / 2 + x, lado + y, lado + x, y + lado, lado + x, y + lado / lado);
  } else if(sorteo < 8){
    // MÓDULO 6: TRIÁNGULO EQ
    noStroke();
    fill(232); // GRIS
    rect(x, y, lado, lado);
    fill(230, 65, 43); // ROJO
    triangle(lado / lado + x, lado / 2 + y, lado + x, y + lado / lado, lado + x, lado + y);
  } else if(sorteo < 9){
    // MÓDULO 7: CUADRADO VOLTEADO
    noStroke();
    fill(240,175, 26); // AMARILLO
    rect(x, y, lado, lado);
    fill(0, 100, 173); // AZUL
    quad(lado / lado + x, lado / 2 + y, x + lado / 2, lado / lado + y, lado + x, lado / 2 + y, lado / 2+ x, lado + y);
  } else if(sorteo < 10){
    // MÓDULO 10: MEDIO RECT + MEDIO CIRC (MELLIZOS)
    noStroke();
    fill(232); // GRIS
    rect(x, y, lado, lado);
    fill(230, 65, 43); // ROJO
    arc(x + lado, lado / 2 + y, lado, lado, 90, 270);
    fill(0, 100, 173); // AZUL
    rect(x , y, lado / 2, lado);
  }
  
  // Cambio de posición (orientación vertical - opción E)
  y = y + lado

  if(y >= windowHeight){
    x = x + lado
    y = 0
  }
  
  // Limpiar canvas y repetir draw con valor inicial de x e y
  if (x >= windowWidth){
    clear();
    background(232);
    x = 0
    y = 0
  }
}
