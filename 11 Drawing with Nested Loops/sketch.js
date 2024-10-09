// Drawing with Nested Loops
// Ethan Spearey
// 2024-10-09

//Global Variables
//let gridSpacing = 5;
//
function setup()
{
  createCanvas(windowWidth, windowHeight);
  //loopReview();
}
//
//function loopReview()
//{
//  //Quick nested loop practice (x, y)
//  for (let x = 0; x < 4; x++) //x: 0, 1, 2, 3
//  {
//    for (let y = 0; y < 4; y++) //y: 0, 1, 2, 3
//    {
//      print(x, y);
//    }
//  }
//}
//
//function draw()
//{
//  background(220);
//  renderGrid();
//}
//
//function circleDistance(x1, y1, x2, y2)
//{
//  let a = abs(x1 - x2);
//  let b = abs(y1 - y2);
//  let c = sqrt(pow(a, 2) + pow(b, 2));
//  return round(c);
//}
//
//function renderGrid()
//{
//  //Use nested loops to create a grid of shapes...
//  for (let x = 0; x < width; x = x + gridSpacing)
//  {
//    for (let y = 0; y < height; y = y + gridSpacing)
//    {
//      let d = circleDistance(x, y, mouseX, mouseY);
//
//      if(d > 150)
//      {
//        fill(0);
//      }
//      else
//      {
//        fill(200, 50, 120);
//      }
//
//      circle(x, y, gridSpacing);
//      textSize(gridSpacing/2);
//      textAlign(CENTER, CENTER);
//      text(d, x, y);
//    }
//  }
//}

function draw()
{
  background(220);
  for(let x = 0; x < width; x+=40)
  {
    circle (x, 0, 20);
    line(x, 0, mouseX, mouseY);
  }
}