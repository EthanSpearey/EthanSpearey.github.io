// Metal Gear Solid VR Mission (GBC)
// Ethan Spearey
// 2024-11-21

let titleScreen;
let gameOver;
let missionFailed;
let solidSnakeStart = [];
let nSolidSnake = [];
let nESolidSnake = [];
let eSolidSnake = [];
let sESolidSnake = [];
let sSolidSnake = [];
let sWSolidSnake = [];
let wSolidSnake = [];
let nWSolidSnake = [];
let playerX;
let playerY;

function preload()
{
  titleScreen = loadImage("assets/New Sprite Frames/Title Screen.png");
  gameOver = loadImage("assets/New Sprite Frames/Game Over.png");
  missionFailed = loadImage("assets/New Sprite Frames/Mission Failed.png");
  for (let i = 1; i < 34; i++)
  {
    solidSnakeStart.push(loadImage("assets/New Sprite Frames/Solid Snake Spawn" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    nSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake North" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    nESolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake North-East" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    eSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake East" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    sESolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake South-East" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    sSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake South" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    sWSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake South-West" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    wSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake West" + i + ".png"));
  }
  for (let i = 0; i < 8; i++)
  {
    nWSolidSnake.push(loadImage("assets/New Sprite Frames/Solid Snake North-West" + i + ".png"));
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
  if(keyPressed(keyCode === 13)) //Enter Key
  {

  }
}

function keyPressed()
{
  if(keyCode === 87) //W Key
  {
    image(nSolidSnake[0], 0, 0);
    playerY++;
  }
  if(keyCode === 65) //A Key
  {
    image(wSolidSnake[0], 0, 0);
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