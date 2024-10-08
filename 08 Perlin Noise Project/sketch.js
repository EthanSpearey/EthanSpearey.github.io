// Perlin Noise Project
// Ethan Spearey
// 2024-10-02

let rectWidth = 2

let time = 2
let interval = 0.01

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  background(220);

  time = 2

  generateTerrain();
}

function generateTerrain()
{
  for(let x = 0; x < width; x += rectWidth)
  {
    fill(255, 0, 0);
    let rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 0, 700);
    time += interval
    rect(x, height, rectWidth, -rectHeight);
  }

  
}

function drawFlag(x, y)
{
  // Flag and Pole
  fill(0, 0, 0);
  rect(x, y, 5, 20);
  rect(x+10, y, 7, 10);
}