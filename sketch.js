let mySound;

function preload() {
  mySound = loadSound('./glitch_wave_2.mp3');
}

const moduleRows = 6;
const moduleColumns = 6;
const modules = [];
const moduleWidth = 100;
const moduleHeight = 100;

const startsquare_width = 200;
const startsquare_height = 100;

let time = 0;
let waves = [];

let switchInterval = 12000; // 0.6 minutes in milliseconds for each code segment

function setup() {
  createCanvas(1800, 900);
  colorMode(HSB, 150, 100, 100);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      modules.push(new Module(generateCells(), startsquare_width + 200 * j, startsquare_height + 200 * i, moduleWidth, moduleHeight, moduleColumns, moduleRows, i));
    }
  }

  for (let i = 1; i < 5; i++) {
    waves.push(new Wave(i));
  }

  mySound.loop(); // This will loop the sound
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
  let currentTime = millis();
  let currentSegment = Math.floor(currentTime / switchInterval) % 4; // Loop through 5 segments

  switch (currentSegment) {
    case 0:
      executeCode1();
      break;
    case 1:
      executeCode2();
      break;
    case 2:
      executeCode3();
      break;
    case 3:
      executeCode4();
      break;
    case 4:
      executeCode5();
      break;
  }
}

function executeCode1() {
  background('#333333');

  // Update and draw waves with grey fill color
  for (let wave of waves) {
    wave.setRadius(30);
    wave.setFillColor(color(30)); // Grey color
    wave.updateWave();
  }

  // Draw vertical lines
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    stroke(70);
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
  }

  // Calculate spacing and draw the grid of squares
  const squareCols = 5;
  const squareRows = 4;
  const spacingX = (width - startsquare_width - squareCols * moduleWidth) / (squareCols + 1);
  const spacingY = (height - startsquare_height - squareRows * moduleHeight) / (squareRows + 1);

  for (let i = 0; i < squareCols; i++) {
    for (let j = 0; j < squareRows; j++) {
      const squareX = startsquare_width + spacingX + i * (moduleWidth + spacingX);
      const squareY = startsquare_height + spacingY + j * (moduleHeight + spacingY);
      fill(random(0, 40), random(0, 40), random(0, 80)); // Adjusted fill color as per module code
     
    }
  }

  // Draw modules on top
  for (const module of modules) {
    module.drawModule();
  }
}

function executeCode2() {
  background('#333333'); // Different background color for Code 2

  // Update and draw waves with a different color and radius for Code 2
  for (let wave of waves) {
    wave.setRadius(20); // Smaller radius for Code 2
    wave.setFillColor(color(0, 0, 255)); // Blue color for Code 2
    wave.updateWave();
  }

  // Draw vertical lines (similar to executeCode1)
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    stroke(70);
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
  }

  // Calculate spacing and draw the grid of squares (similar to executeCode1)
  const squareCols = 5;
  const squareRows = 4;
  const spacingX = (width - startsquare_width - squareCols * moduleWidth) / (squareCols + 1);
  const spacingY = (height - startsquare_height - squareRows * moduleHeight) / (squareRows + 1);

  for (let i = 0; i < squareCols; i++) {
    for (let j = 0; j < squareRows; j++) {
      const squareX = startsquare_width + spacingX + i * (moduleWidth + spacingX);
      const squareY = startsquare_height + spacingY + j * (moduleHeight + spacingY);
      fill(random(50, 100), random(0, 20), random(20, 60)); // Different fill color for Code 2
      }
  }

  // Draw modules on top (similar to executeCode1)
  for (const module of modules) {
    module.drawModule();
  }
}

function executeCode3() {
  background('#333333'); // Different background color for Code 2

  // Update and draw waves with a different color and radius for Code 2
  for (let wave of waves) {
    wave.setRadius(20); // Smaller radius for Code 2
    wave.setFillColor(color(0, 0, 255)); // Blue color for Code 2
    wave.updateWave();
  }

  // Draw vertical lines (similar to executeCode1)
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    stroke(70);
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
  }

  // Calculate spacing and draw the grid of squares (similar to executeCode1)
  const squareCols = 5;
  const squareRows = 4;
  const spacingX = (width - startsquare_width - squareCols * moduleWidth) / (squareCols + 1);
  const spacingY = (height - startsquare_height - squareRows * moduleHeight) / (squareRows + 1);

  for (let i = 0; i < squareCols; i++) {
    for (let j = 0; j < squareRows; j++) {
      const squareX = startsquare_width + spacingX + i * (moduleWidth + spacingX);
      const squareY = startsquare_height + spacingY + j * (moduleHeight + spacingY);
      fill(random(50, 100), random(0, 20), random(20, 60)); 
    }
  }

  // Draw modules on top (similar to executeCode1)
  for (const module of modules) {
    module.drawModule();
  }
}


function executeCode4() {
  background('#778899'); // Set background color for Code 4

  // Update and draw waves with new properties
  for (let wave of waves) {
    wave.setRadius(50); // Set a different radius
    wave.setFillColor(color(40)); // Set fill color to grey
    wave.updateWave(); // Update the wave with these new properties
  }

  // Draw modules with updated wave effect
  for (const module of modules) {
    // Update cell colors if needed
    // module.updateCellColors(() => color(random(255), random(255), random(255)));
    module.drawModule(); // Draw each module
  }

  // Draw vertical lines
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    stroke(70); // Stroke color for lines
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
  }
}


// Implement executeCode3, executeCode4, executeCode5...

class Wave {
  constructor(yPos) {
    this.yPos = yPos;
    this.time = 0;
    this.data = [];
    this.radius = 30;
    this.fillColor = color(40);
  }

  updateWave() {
    push();
    translate(200, 200 * this.yPos - 50);

    let x = this.radius * cos(this.time);
    let y = this.radius * sin(this.time);

    this.data.unshift(y);

    fill(this.fillColor);
    beginShape();
    for (let i = 0; i < this.data.length; i++) {
      vertex(i, this.data[i]);
    }
    endShape();

    pop();
    this.time += 0.05;
  }

  setRadius(newRadius) {
    this.radius = newRadius;
  }

  setFillColor(newColor) {
    this.fillColor = newColor;
  }
}

class Module {
  constructor(cells, coordX, coordY, moduleWidth, moduleHeight, columns, rows, rowOffset) {
    this.cells = cells;
    this.columns = columns;
    this.rows = rows;
    this.moduleWidth = moduleWidth;
    this.moduleHeight = moduleHeight;
    this.coordX = coordX;
    this.coordY = coordY;
    this.rowOffset = rowOffset;
  }

  drawModule() {
    const cellWidth = this.moduleWidth / this.columns;
    const cellHeight = this.moduleHeight / this.rows;

    push();
    translate(this.coordX, this.coordY);

    fill(random(0, 200), random(0, 20), random(50, 100));
    rect(0, 0, this.moduleWidth, this.moduleHeight);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns / 2; c++) {
        this.cells[r][c] = constrain(this.cells[r][c], 0, random(0, 130));

        const y = this.moduleHeight * (r / this.rows);
        const x = this.moduleWidth * (c / this.columns);

        const yOffset = waveEffect(x, y, this.rowOffset);
        fill(this.cells[r][c], random(0, 10), random(0, 50));
        rect(x, y + yOffset, cellWidth, cellHeight);
      }
    }

    pop();
  }

  updateCellColors(colorFunction) {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        this.cells[r][c] = colorFunction();
      }
    }
  }
}

function waveEffect(x, y, rowOffset, magnitude) {
  return magnitude * sin(time * 1 + x / 50 + y / 50 + rowOffset * 0.5);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    saveCanvas('myCanvas', 'png');
  }
}

