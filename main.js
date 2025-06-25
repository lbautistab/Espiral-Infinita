let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
}

function draw() {
  // Fondo con transparencia para dejar rastro
  fill(0, 0.1);
  rect(0, 0, width, height);

  translate(width / 2, height / 2);

  // Escala oscilante (espiral se contrae y expande)
  let scaleFactor = 1 + sin(t * 0.02);

  for (let i = 0; i < 500; i++) {
    // Rotación del espiral con el tiempo
    let angle = radians(i * 5 + t * 0.5);

    // Espiral expandiéndose/contrayéndose con rotación
    let r = i * scaleFactor;

    let x = r * cos(angle);
    let y = r * sin(angle);

    // Colores que cambian con el tiempo
    let col = (map(i, 0, 500, 0, 360) + t) % 360;

    // Tamaño que pulsa con el tiempo y con la posición
    let sz = map(sin(t * 0.05 + i * 0.05), -1, 1, 2, 10);

    fill(col, 100, 100);
    ellipse(x, y, sz, sz);
  }

  t += 1;
}




