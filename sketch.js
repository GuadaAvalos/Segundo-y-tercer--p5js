//INSPIRED BY "La Colonizacion del Espacio" de Carreño Antonio.
// APRETAR CLICK "IZQ" PARA ENCONTRAR LA PUERTA QUE TE TRANSPORTA HACIA LA TIERRA
// APRETAR CLICK "DER" PARA ESTAR EN LA TIERRA Y TENER AHORA UNA PUERTA HACIA EL ESPACIO.
let prta = 50;
let b1 = 255;
let esp = false;
let giro = 0;
let x = 50;
let y = 50;
function setup() {
  //Dimensiones de la obra
  createCanvas(400, 500);
  angleMode(DEGREES);
}

function draw() {
  //Color de fondo (0,255)
  createCanvas(400, 500);
  background(70, 25, 112);

  ////////////////Lineas Espaciales
  noStroke();
  fill(218, 112, 214, 20);
  bezier(100, 0, 60, 150, 300, 50, 400, 300);
  bezier(400, 150, 70, 300, 350, 400, 0, 500);
  bezier(470, 500, 360, 350, 100, 500, 0, 350);
  fill(106, 90, 205, 50);
  bezier(50, 0, 60, 150, 300, 50, 400, 250);
  bezier(400, 100, 70, 300, 350, 400, 0, 470);
  bezier(400, 500, 360, 350, 100, 500, 0, 350);
  fill(199, 21, 133, 30);
  bezier(0, 0, 60, 150, 300, 50, 400, 400);
  bezier(400, 125, 70, 300, 350, 400, 0, 500);
  bezier(300, 500, 360, 350, 100, 500, 0, 200);
  
  //////////////////Puntos / Estrellas
  fill(106, 90, 205);
  ellipse(250, 350, 8, 8);
  ellipse(150, 300, 8, 8);
  ellipse(320, 100, 8, 8);
  ellipse(385, 180, 8, 8);
  ellipse(360, 450, 8, 8);
  ellipse(130, 30, 8, 8);
  ellipse(20, 350, 8, 8);
  ellipse(30, 200, 8, 8);
  ellipse(340, 400, 8, 8);
  ellipse(19, 25, 8, 8);
  ellipse(200, 280, 8, 8);
  ellipse(130, 480, 8, 8);
  ellipse(190, 390, 8, 8);
  ellipse(100, 350, 8, 8);
  ellipse(350, 300, 8, 8);
  ellipse(370, 30, 8, 8);
  ellipse(310, 480, 8, 8);

  fill(255);
  ellipse(250, 350, 5, 5);
  ellipse(150, 300, 5, 5);
  ellipse(320, 100, 5, 5);
  ellipse(385, 180, 5, 5);
  ellipse(360, 450, 5, 5);
  ellipse(130, 30, 5, 5);
  ellipse(20, 350, 5, 5);
  ellipse(30, 200, 5, 5);
  ellipse(340, 400, 5, 5);
  ellipse(19, 25, 5, 5);
  ellipse(200, 280, 5, 5);
  ellipse(130, 480, 5, 5);
  ellipse(190, 390, 5, 5);
  ellipse(100, 350, 5, 5);
  ellipse(350, 300, 5, 5);
  ellipse(370, 30, 5, 5);
  ellipse(310, 480, 5, 5);

  //////////////PLANETAS
  noStroke();
  fill(255, 255, 0);
  ellipse(90, 490, 200, 200);
  fill(154, 205, 50, 70);
  bezier(43, 400, 50, 460, 200, 430, 190, 490);
  bezier(15, 420, 0, 490, 150, 380, 180, 600);
  fill(255, 69, 0, 150);
  ellipse(370, 350, 100, 100);
  fill(255, 69, 0, 150);
  bezier(320, 365, 200, 430, 360, 400, 480, 295);
  fill(0, 0, 220, 30);
  ellipse(350, 20, 100, 100);
  fill(0, 0, 205);
  ellipse(350, 20, 70, 70);

  //   Estrella Fugaz
  push();
  translate(200, 450);
  rotate(giro);
  translate(170, 200);
  fill(255);
  ellipse(0, 30, 50, 10);
  ellipse(0, 30, 10, 50);
  rotate(45);
  translate(21, -10);
  ellipse(0, 30, 40, 5);
  ellipse(0, 30, 5, 40);
  fill(255, 191, 0, 40);
  ellipse(0, 30, 60, 60);
  rotate(180);
  quad(0, -20, -10, 230, 30, 150, 100, 200);

  giro = giro + 2;
  pop();

  ///////////PARTE INTERACTIVA

  /////////////////////PUERTA , ahora del espacio
  noStroke();
  fill(255, 255, 0);
  ellipse(90, 490, 200, 200);
  fill(154, 205, 50, 70);
  bezier(43, 400, 50, 460, 200, 430, 190, 490);
  bezier(15, 420, 0, 490, 150, 380, 180, 600);

  if (prta == 50 && mouseIsPressed)
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        ///////////////////PUERTA
        push();
        translate(mouseX -120, mouseY -120);
        fill(224, 250, 250);
        rect(50, 50, 125, 200);

        // Puerta marron
        fill(160, 82, 45);
        quad(300, 20, 175, 50, 175, 250, 300, 280);

        //manija
        fill(255, 255, 15);
        ellipse(280, 160, 12, 8);

        //Sombra blanca
        fill(255, 255, 255, 60);
        quad(50, 250, 0, 1000, 500, 550, 175, 250);

        ///////////////////// NUBES
        fill(255);
        bezier(70, 180, 80, 200, 60, 210, 50, 200);
        bezier(70, 180, 130, 150, 60, 100, 50, 160);
        bezier(130, 75, 120, 90, 70, 80, 105, 50);
        bezier(160, 50, 200, 80, 150, 100, 130, 75);
        bezier(150, 170, 100, 160, 80, 230, 175, 200);
        bezier(150, 170, 160, 120, 180, 120, 175, 200);

        //Relleno de Nubes
        triangle(51, 160, 51, 200, 70, 180);
        triangle(105, 51, 135, 80, 160, 51);
        pop();
      }

      if (mouseButton == RIGHT) {
        // Fondo
        background(255, 178, 107);

        //  Paisaje de la tierra
        push();
        translate(30, 50);
        fill(255, 213, 111);
        ellipse(63, 35, 100, 100);
        fill(b1);
        ellipse(45, 80, 60, 50);
        ellipse(119, 75, 100, 70);
        quad(20, 110, 50, 80, 150, 100, 170, 110);
        pop();

        // Mosquito
        push();
        translate(x, y)
        fill(101, 100, 124);
        ellipse(20, 180, 15 *sin(frameCount * 2), 10 * sin(frameCount * 2));
        fill(255, 200);
        ellipse(21, 177, 5 *sin(frameCount * 2), 7 * sin(frameCount * 2));
        
        x = x + 0.5
        pop();

        //   Arbol/Piso
        fill(147, 155, 98);
        ellipse(388, 46, 200, 300);
        fill(197, 137, 64);
        quad(370, 70, 350, 400, 400, 400, 400, 70);
        fill(255, 213, 111);
        rect(0, 329, 400, 329);

        //   Banco
        fill(0);
        rect(70, 300, 15, 130);
        rect(260, 300, 15, 130);
        fill(220, 132, 73);
        rect(50, 300, 250, 15);
        rect(50, 320, 250, 15);
        rect(50, 340, 250, 15);
        rect(50, 365, 250, 25);

        //  PUERTA
        push();
        translate(mouseX -120, mouseY -120);
        fill(75, 0, 130);
        rect(50, 50, 125, 200);

        // Puerta negra
        fill(0);
        quad(300, 20, 175, 50, 175, 250, 300, 280);

        //manija
        fill(255, 69, 0);
        ellipse(280, 160, 12, 8);

        //Sombra blanca
        fill(255, 255, 255, 60);
        quad(50, 250, 0, 1000, 500, 550, 175, 250);

        ////Planetas de la puerta
        fill(154, 205, 50);
        ellipse(90, 100, 50, 50);
        fill(0, 128, 128, 100);
        bezier(66, 90, 70, 130, 100, 55, 115, 105);
        fill(255, 0, 255);
        ellipse(140, 210, 40, 40);
        fill(186, 85, 211, 80);
        ellipse(140, 210, 55, 55);
        bezier(122, 220, 140, 250, 140, 170, 158, 200);

        ////estrellas
        fill(b1);
        ellipse(150, 150, 5, 5);
        fill(b1, 50);
        ellipse(150, 150, 8, 8);
        fill(b1);
        ellipse(130, 70, 5, 5);
        fill(b1, 50);
        ellipse(130, 70, 8, 8);
        fill(b1);
        ellipse(100, 180, 5, 5);
        fill(b1, 50);
        ellipse(100, 180, 8, 8);
        fill(b1);
        ellipse(70, 230, 5, 5);
        fill(b1, 50);
        ellipse(70, 230, 8, 8);
        pop();
      }
    }
}
// console.log("x: " + mouseX + " Y:" + mouseY);
document.oncontextmenu = function () {
  return false;
};
