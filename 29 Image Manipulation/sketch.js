// Image Manipulation
// Ethan Spearey
// 2024-12-11

let pilot; //p5.Image

function preload()
{
  pilot = loadImage("assets/aviator.png");
}

function setup()
{
  createCanvas(pilot.width, pilot.height);
}

function drawCharacter(x, y, avg)
{
  fill(255);
  if(avg > 200) text("<", x, y);
  else if(avg > 140) text("?", x, y);
  else if(avg > 90) text(":", x, y);
  else if(avg > 40) text(".", x, y);
}

function draw()
{
  image(pilot, 0, 0);
  loadPixels(); ///Allows us to access pixels on the canvas
  background(0);

  for(let x = 0; x < width; x += 7)
  {
    for(let y = 0; y < height; y += 11)
    {
      let location = (x + y*pilot.width)*4;
      let avg = avgPixel(location);
      drawCharacter(x, y, avg);
    }
  }

  //for(let i = 0; i < pixels.length; i += 4) //Loop though all the pixels
  {
    //Lighten Filter
    /*
    let boost = map(mouseX, 0, width, 0, 200);
    let r = min(pixels[i] + boost, 255);
    let g = min(pixels[i + 1] + boost, 255);
    let b = min(pixels[i + 2] + boost, 255);
    setPixelColor(i, r, g, b);
    */

    //Greyscale Filter
    /*
    let a = avgPixel(i);
    setPixelColor(i, a, a, a);
    */
  }

  //updatePixels();
  
}

function avgPixel(pos)
{
  //Get avg intensity at pos in pixels
  let sum = pixels[pos] + pixels[pos + 1] + pixels[pos + 2];
  return sum/3;
}

function setPixelColor(pos, r, g, b)
{
  //Set a pixel (Starting at pos) to a new RBG value
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}