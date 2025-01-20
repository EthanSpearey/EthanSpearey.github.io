// Metal Gear Solid VR Mission (GBC)
// Ethan Spearey
// 2024-11-21

let titleScreen;
let titleScreenx4;
let titleScreenx8;
let gameOver;
let missionFailed;
let solidSnakeStart = [];
let solidSnakeState = 0; //0 = Idle South | 1 = Run South | 2 = Punch South | 3 = Idle South-West | 4 = Run South-West | 5 = Punch South-West | 6 = Idle West | 7 = Run West | 8 = Punch West | 9 = Idle North-West | 10 = Run North-West | 11 = Punch North-West | 12 = Idle North | 13 = Run North | 14 = Punch North | 15 = Idle North-East | 16 = Run North-East | 17 = Punch North-East | 18 = Idle East | 19 = Run East | 20 = Punch East | 21 = Idle South-East | 22 = Run South-East | 23 = Punch South-East
let idleSouthIndex = 0; let runSouthIndex = 0;
let nSolidSnake = [];
let nESolidSnake = [];
let eSolidSnake = [];
let sESolidSnake = [];
let sSolidSnakeIdle = [];
let sSolidSnakeRun = [];
let sWSolidSnake = [];
let wSolidSnake = [];
let nWSolidSnake = [];
let playerX;
let playerY;
let vrMission = 1;

function preload()
{
  titleScreen = loadImage("assets/New Sprite Frames/Title Screen.png");
  titleScreenx4 = loadImage("assets/New Sprite Frames/Title Screen x4.png");
  titleScreenx8 = loadImage("assets/New Sprite Frames/Title Screen x8.png");
  vrMission = loadImage("assets/New Sprite Frames/VR Mission 1.png");
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
  sSolidSnakeIdle.push(loadImage("assets/New Sprite Frames/Solid Snake South.png"));
  for (let i = 1; i < 8; i++)
  {
    sSolidSnakeRun.push(loadImage("assets/New Sprite Frames/Solid Snake South" + i + ".png"));
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
  imageMode(CENTER);
}

function keyPressed()
{
  if(solidSnakeState === 0)
  {
    solidSnakeState === 1;
  }
  else
  {
    solidSnakeState === 0;
  }
}

function draw()
{
  background(110);
  image(vrMission, width/2, height/2, /*160, 144*/);

  //Snake's Code
  if(solidSnakeState === 0) //Idle
  {
    image(sSolidSnakeIdle[solidSnakeState], width/2, height/2);
  }
  else if(solidSnakeState === 1) //Run
  {
    image(sSolidSnakeRun[runSouthIndex], width/2, height/2);
    if(frameCount % 10 === 0)
    {
      runSouthIndex++;
      if(runSouthIndex > 7)
      {
        runSouthIndex = 0;
      }
    }
  }
}