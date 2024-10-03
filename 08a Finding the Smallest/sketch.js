// Finding the Smallest Number
// Ethan Spearey
// 2024-10-03

let NUM_CIRCLES = 40;
let seed;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw()
{
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles()
{
  noFill();
  let smallD = Infinity;
  let smallX = -1;
  let smallY = -1;
  for(let i = 0; i < NUM_CIRCLES; i++)
  {
    let x = random(0, width);
    let y = random (0, height);
    let d = random(20, 60);
    if(d < smallD)
    {
      smallD = d;
      smallX = x;
      smallY = y;
    }
    circle(x, y, d);
  }
  fill(255, 200, 100);
  text(smallD, width/2, height/2);
  circle(smallX, smallY, smallD);
}