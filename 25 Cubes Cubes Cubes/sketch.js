// Cubes Cubes Cubes
// Ethan Spearey
// 2024-11-18

let angle = map(mouseX, 1, 100);

function setup()
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw()
{
  background(0);
  rotateY(frameCount);
  for(let i = 0; i < 360; i += 45)
  {
    push();
    rotateY(i);
    boxes(30);
    pop();
  }
}

function boxes(size)
{
  if(size > 3)
  {
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);
    boxes(size*0.8);
  }
}