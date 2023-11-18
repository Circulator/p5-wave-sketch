const moduleRows = 6;
const moduleColumns = 6;
const fadeSpeed = 0;
const modules = [];
const moduleWidth = 100;
const moduleHeight = 100;

const startsquare_width = 200;
const startsquare_height = 100;

let time = 0;
let waves = [];
let wave = [];



class ColorBox {
  // ... (same as before)
}

function setup() {
  createCanvas(1800, 900);
  colorMode(HSB, 150, 100, 100);
  //background('#333333');

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      modules.push(new Module(startsquare_width, startsquare_height, moduleWidth, moduleHeight));
  
    }
  }

  for (let i = 1; i < 5; i++) {
    waves.push(new Wave(i));
  }
}

function generateCells() {
  const cells = [];
  for (let r = 0; r < moduleRows; r++) {
    cells[r] = [];
    for (let c = 0; c < moduleColumns; c++) {
      cells[r][c] = random(255);
    }
  }
  return cells;
}

function draw() {
  background('#333333');
  
  for (let i = 0; i < 4; i++) {
    waves[i].updateWave();
  }

  // Draw vertical lines
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
    stroke(70);
  }

  // Calculate the number of squares and the spacing
  const squareCols = 5;
  const squareRows = 4;
  const totalSpacingX = 200 * 5; // Total horizontal spacing
  const totalSpacingY = 200 * 3; // Total vertical spacing

  // Calculate spacing for squares to fit in the middle of each row and column
  const spacingX = (width - startsquare_width - totalSpacingX - squareCols * moduleWidth) / (squareCols - 1);
  const spacingY = (height - startsquare_height - totalSpacingY - squareRows * moduleHeight) / (squareRows - 1);

  // Draw the grid of squares (5x4) aligned with vertical lines
  for (let i = 0; i < squareCols; i++) {
    for (let j = 0; j < squareRows; j++) {
      const squareX = startsquare_width + i * (moduleWidth + spacingX+75);
      const squareY = startsquare_height + j * (moduleHeight + spacingY+166.5);
      fill(random(0, 20), random(0, 20), random(0, 80));
      rect(squareX, squareY, moduleWidth, moduleHeight);
    }
  }

  // Draw the modules on top
  for (const m of modules) {
    m.drawModule();
  }

  time += 0.05;
}

class Wave {
  constructor(yPos) {
    this.yPos = yPos;
    this.time = 0;
    this.data = [];
  }

  updateWave() {
    push();
    translate(100, 200 * this.yPos - 50);

    let radius = 0;

    let x = radius * cos(this.time);
    let y = radius * sin(this.time);

    this.data.unshift(y);

    // Set the stroke color to blue
    stroke(0, 0, 255);
    noFill();
    strokeWeight(0.5);
    beginShape();
    for (let i = 0; i < this.data.length; i++) {
      vertex(i, this.data[i]);
    }
    endShape();

    // Reset the stroke color to its original value
    stroke(0);

    pop();
    this.time += 0;
  }
}

function drawTrapezium(xCenter, yCenter, tileSize) {
  // Randomly adjust each vertex within the bounds of the tile size
  const halfTile = tileSize / 2;
  fill(random(0,50));
  quad(
    xCenter - halfTile + random(-halfTile, halfTile), yCenter - halfTile,
    xCenter + halfTile + random(-halfTile, halfTile), yCenter - halfTile,
    xCenter + halfTile + random(-halfTile, halfTile), yCenter + halfTile,
    xCenter - halfTile + random(-halfTile, halfTile), yCenter + halfTile
  );
}

class Module {
  constructor(coordX, coordY, moduleWidth, moduleHeight) {
    this.moduleWidth = moduleWidth;
    this.moduleHeight = moduleHeight;
    this.coordX = coordX;
    this.coordY = coordY;
  }

  drawModule() {
    push();
    translate(this.coordX, this.coordY);
    drawTrapezium(this.moduleWidth / 2, this.moduleHeight / 2, this.moduleWidth, this.moduleHeight);
    pop();
  }
}

function waveEffect(x, y, rowOffset) {
  const magnitude = 0;

  return magnitude * sin(time * 1 + x / 50 + y / 50 + rowOffset * 0.5);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    saveCanvas('myCanvas', 'png');
  }
}
