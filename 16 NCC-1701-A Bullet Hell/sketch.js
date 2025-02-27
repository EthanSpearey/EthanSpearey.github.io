// NCC-1701-A Bullet Hell
// Ethan Spearey
// 2024-10-17

// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload()
{
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw()
{
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed()
{
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship
{
  constructor(x, y, theImage) 
  {
    // define the variables needed for this ship
    let x = windowHeight/2
    let y = windowWidth/2
    let theImage = shipImage
  }

  update()
  {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(37) || keyIsDown(65)) //37 === LeftArrow || 65 === A
    {
      let x = x-5
    }

    if (keyIsDown(39) || keyIsDown(68)) //39 === RightArrow || 68 === D
    {
      let x = x+5
    }
    // if doing extra for experts, show bullet(s)
  }

  display()
  {
    // show the ship
  }

  handleKeyPress()
  {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet
{
  constructor(x, y, dx, dy, theImage)
  {
    // define the variables needed for the bullet here
  }

  update()
  {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display()
  {
    // show the bullet
  }

  isOnScreen()
  {
    // check if the bullet is still on the screen
  }
}