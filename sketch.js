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
  createCanvas(300, 900);
  colorMode(HSB, 150, 100, 100);
  //background('#333333');

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      modules.push(new Module(generateCells(), startsquare_width + 200 * j, startsquare_height + 200 * i, moduleWidth, moduleHeight, moduleColumns, moduleRows, i));
    }
  }
  
  for (let i = 1; i < 5; i++){
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
  for (let i = 0; i < 4; i++){
    waves[i].updateWave();
  }
  
  for (const m of modules) {
    m.drawModule();
  }

  // Stroke
  for (let i = startsquare_width + 50; i < startsquare_width + 1000; i += 200) {
    line(i, startsquare_height - 50, i, startsquare_height + 200 * 3 + 150);
    stroke(70);
  }
  
  time += 0.05;


}

class Wave{
  constructor(yPos){
    this.yPos = yPos;
    this.time = 0;
    this.data = [];
  }
  
  updateWave() {
  push();
  translate(200, 200*this.yPos-50);

  let radius = 30;
    

  let x = radius * cos(this.time);
  let y = radius * sin(this.time);

  this.data.unshift(y);

  fill(40);
  beginShape(); // Start drawing a continuous line
  for (let i = 0; i < this.data.length; i++) {
    vertex(i, this.data[i]);
  }
  endShape(); // End drawing the continuous line
      
  pop();
  this.time += 0.05;
  //this.time += 0;
  //this.time += 0;
}
  
  
}


function updateWave(yPos) {
  push();
  translate(200, 150*yPos);

  let radius = 50;

  let x = radius * cos(time);
  let y = radius * sin(time);

  wave.unshift(y);

  noFill();
  beginShape(); // Start drawing a continuous line
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape(); // End drawing the continuous line
  pop();
  time += 0.05;
}

class Module {
  constructor(cells, coordX, coordY, moduleWidth, moduleHeight, columns, rows, rowOffset) {
    this.cells = cells;
    this.columns = columns;
    this.rows = rows;
    this.moduleWidth = moduleWidth;
    //this.moduleWidth = moduleWidth*2;
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

    for (let r = 0 ; r < this.rows; r++) {
      for (let c = 0; c < this.columns / 2; c++) {
        this.cells[r][c] = constrain(this.cells[r][c], 0, random(0, 130));

        const y = this.moduleHeight * (r / this.rows);
        const x = this.moduleWidth * (c / this.columns);

        // Apply wave effect to the cells with row-specific offset
        const yOffset = waveEffect(x, y, this.rowOffset);
        fill(this.cells[r][c], random(0, 10), random(0, 50));
        rect(x, y + yOffset, cellWidth, cellHeight);
      }
    }
    pop();
  }
}

function waveEffect(x, y, rowOffset) {
  // Adjust this value to control the magnitude of the wave effect
  //const magnitude = 20;
  const magnitude =50;
  
  return magnitude * sin(time * 1 + x / 50 + y / 50 + rowOffset * 0.5);
  //return magnitude * sin(time * 2 + x / 50 + y / 50 + rowOffset * 0.5);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    // Save the canvas as 'myCanvas.png'
    saveCanvas('myCanvas', 'png');
  }
}
