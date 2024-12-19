// Metal Gear Solid VR Mission (GBC)
// Ethan Spearey
// 2024-11-21

let titleScreen;
let solidSnake;
let sprites;
let playerX;
let playerY;

function preload()
{
  titleScreen = loadImage("assets/Title Screen.png");
  for (let i = 1; i < 34; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Spawn Animation" + i + ".png"));
  }
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle North Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle North-East Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle East Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle South-East Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle South Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle South-West Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle West Animation.png");
  solidSnake = loadImage("assets/New Sprite Frames/Solid Snake Idle North-West Animation.png");
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North-East Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run East Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South-East Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South-West Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run West Animation" + i + ".png"));
  }
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North-West Animation" + i + ".png"));
  }
}

function setup()
{
  createCanvas(160, 144);
}

function draw()
{
  background(110);
  image(titleScreen, 0, 0);
}

function keyPressed()
{
  if(keyCode === 87) //W Key
  {
    playerY++;
  }
  if(keyCode === 65) //A Key
  {
    playerX--;
  }
  if(keyCode === 83) //S Key
  {
    playerY--;
  }
  if(keyCode === 68) //D Key
  {
    playerX++;
  }
}