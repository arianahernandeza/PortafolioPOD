function setup() {
  // Código inicial. Se ejecuta una sola vez
  createCanvas(768, 768)
  background(200, 184, 142)
}

function draw() {
  // Se ejecuta después de setup conitnuamente
  noStroke();
  fill(198, 128, 35);
  rect(0, 0, 176, 264); // rect mostaza
  fill(171,81, 21);
  rect(447, 0, 252, 366); // rect cobre
  fill(134, 137, 64);
  rect(707, 293, 100, 73); // rect verde peq
  fill(134, 137, 64);
  rect(0, 384, 415, 401); // rect verde grande
  fill(198, 128, 35);
  rect(447, 706, 336, 82); // rect mostaza peq
  
  stroke(74, 78, 30)
  strokeWeight(15);
  line(296, 0, 296, 768); // vertical 1 fino - izq
  strokeWeight(33);
  line(431, 0, 431, 768); // vertical 1 grueso - der
  strokeWeight(29);
  line(0, 278, 768, 278); // horizontal grande 1 - arriba
  strokeWeight(19);
  line(0, 375, 768, 375); // horizontal grande 2 - abajo
  strokeWeight(20);
  line(186, 0, 186, 273);  // vertical peq 1 - izq
  strokeWeight(13);
  line(705, 0, 705, 366);  // vertical peq 2 - der
  strokeWeight(24);
  line(428, 694, 768, 694); // horizontal peq
}
