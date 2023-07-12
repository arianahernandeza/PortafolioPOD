// TP3: BUCLES ANIDADOS
let tiempo
/* bordo = color('#5b000a'); mostaza = color('#f18c21');*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  tiempo = millis()

  // 1: INSTRUMENTAL - LINEAS VERTICALES DEGRADADO
  if (tiempo < 200) {
    background('#f18c21')
  } else if (tiempo < 1210) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 2090) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
      fill(color('#f18c21'))
      noStroke()
      textSize(200)
      text('2 DOS 2', width / 2 - 400, height / 2 + 50)
    }
  } else if (tiempo < 3110) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 4130) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 6030) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 6170) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 8070) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 8200) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 10100) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 10240) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 12130) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 13020) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 14170) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 15060) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 16210) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 17090) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  } else if (tiempo < 17240) {
    background(color('#f18c21'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(91,0,10, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }    
  } else if (tiempo < 18050) {
    background(color('#5b000a'));
    strokeWeight(2)
    for (let x = 5; x < width; x = x + 35) {
      stroke(color(241,145,44, x / 2))
      line(x, 0, x, height)
      col = x / 2 // Color dividido entre 2
    }
  }
  // 2: VERSO - LINEAS ASIMETRICO
  else if (tiempo < 19090){
    background(color('#5b000a'));
    for (y = 20; y <= height; y += 15) {
      for (x = 20; x <= width; x += 15) {
        line(x, y, width / 2, height / 2);
        x = x + 10;
        y = y + 5
      }
    }
  } else if(tiempo < 19210){
    background(color('#5b000a'))
      for (y = 20; y <= height; y += 70) {
        for (x = 20; x <= width; x += 70) {
          stroke(color('#f18c21'));
          line(x, y, width / 2, height / 2);
          stroke(color('#f18c21'))
          ellipse(width / 2, height / 2, 50)
        }
      }
  } else if (tiempo < 24230){
    background(color('#5b000a'));
    for (y = 20; y <= height; y += 15) {
      for (x = 20; x <= width; x += 15) {
        line(x, y, width / 2, height / 2);
        x = x + 10;
        y = y + 5
      }
    }
  } else if(tiempo < 26200){
    background(color('#5b000a'))
      for (y = 20; y <= height; y += 70) {
        for (x = 20; x <= width; x += 70) {
          stroke(color('#f18c21'));
          line(x, y, width / 2, height / 2);
          stroke(color('#f18c21'))
          ellipse(width / 2, height / 2, 50)
        }
      }
  } else if (tiempo < 34110){
    background(color('#5b000a'));
    for (y = 20; y <= height; y += 15) {
      for (x = 20; x <= width; x += 15) {
        line(x, y, width / 2, height / 2);
        x = x + 10;
        y = y + 5
      }
    }
  } // 3: PRECORO - ESTRELLA CENTRO
  else if(tiempo < 44230){
    background(color('#f18c21'))
    for (y = 20; y <= height; y += 70) {
      for (x = 20; x <= width; x += 70) {
        stroke(color('#5b000a'))
        line(x, y, width / 2, height / 2);
      }
    }
  } else if(tiempo < 46210){
    // CAMBIAR COLOR + TE LO ADVERTI
    background(color('#5b000a'))
    for (y = 20; y <= height; y += 70) {
      for (x = 20; x <= width; x += 70) {
        stroke(color('#f18c21'))
        line(x, y, width / 2, height / 2);
        fill(255)
        noStroke()
        textSize(100)
        text('TE LO ADVERTÍ', width / 2 - 200, height / 2 + 50)
      }
    }
  } else if(tiempo < 50120){
    background(color('#f18c21'))
    for (y = 20; y <= height; y += 70) {
      for (x = 20; x <= width; x += 70) {
        stroke(color('#5b000a'))
        line(x, y, width / 2, height / 2);
      }
    }
  } // 4: CORO - LINEAS CENTRO
  else if(tiempo < 52120){
    background(color('#5b000a'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#f18c21'));
        line(width / 2, height / 2, x, y);
      }
    }
  } else if(tiempo < 52230){
    // CAMBIAR COLOR + DOS
    background(color('#f18c21'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#5b000a'));
        line(width / 2, height / 2, x, y);
        fill(255)
        noStroke()
        textSize(200)
        text('DOS', width / 2 - 200, height / 2 + 50)
      }
    }
  } else if(tiempo < 54180){
    background(color('#5b000a'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#f18c21'));
        line(width / 2, height / 2, x, y);
      }
    }
  } else if(tiempo < 55080){
    // CAMBIAR COLOR + DOS
    background(color('#f18c21'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#5b000a'));
        line(width / 2, height / 2, x, y);
        fill(255)
        noStroke()
        textSize(200)
        text('DOS', width / 2 - 200, height / 2 + 50)
      }
    }
  } else if(tiempo < 100240){
    background(color('#5b000a'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#f18c21'));
        line(width / 2, height / 2, x, y);
      }
    }
    } else if(tiempo < 101160){
      // CAMBIAR COLOR + DOS
    background(color('#f18c21'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#5b000a'));
        line(width / 2, height / 2, x, y);
        fill(255)
        noStroke()
        textSize(200)
        text('DOS', width / 2 - 200, height / 2 + 50)
      }
    }
    } else if(tiempo < 102190){
      background(color('#5b000a'))
      for (let x = 20; x < width; x = x + 30) {
        for (let y = 0; y < height; y = y + 30) {
          stroke(color('#f18c21'));
          line(width / 2, height / 2, x, y);
        }
      }
    } else if(tiempo < 103060){
     // CAMBIAR COLOR + DOS
    background(color('#f18c21'))
    for (let x = 20; x < width; x = x + 30) {
      for (let y = 0; y < height; y = y + 30) {
        stroke(color('#5b000a'));
        line(width / 2, height / 2, x, y);
        fill(255)
        noStroke()
        textSize(200)
        text('DOS', width / 2 - 200, height / 2 + 50)
      }
    }
      } else if(tiempo < 109160){
        background(color('#5b000a'))
        for (let x = 20; x < width; x = x + 30) {
          for (let y = 0; y < height; y = y + 30) {
            stroke(color('#f18c21'));
            line(width / 2, height / 2, x, y);
          }
        }
      }
    }