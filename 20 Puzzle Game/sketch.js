// Puzzle Game
// Ethan Spearey
// 2024-10-29

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,   0,   0,   0, 0],
                [0,   0,   0,   0, 0],
                [0,   255, 0,   0, 0],
                [255, 255, 255, 0, 0]];
let gridFinished = [[0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]];
let gridFinished2 = [[255, 255, 255, 255, 255],
                     [255, 255, 255, 255, 255],
                     [255, 255, 255, 255, 255],
                     [255, 255, 255, 255, 255]];

function setup()
{
  //Determine the size of each square. Could use windowHeight, windowHeight 
  // for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  winCondition();
}

function draw()
{
  background(220);
  determineActiveSquare();   //Figure out which tile the mouse cursor is over.
  drawGrid();                //Render the current game board to the screen
                             // (and the overlay).
}

function winCondition()
{
  if(gridData === gridFinished)
    {
    fill(26, 89, 150);
    text("You're Winner", windowWidth/2, windowHeight/2);
  }
}

function mousePressed()
{
  //Cross-shaped pattern flips on a mouseclick. Boundary conditions are checked
  // within the flip function to ensure in-bounds access for array.
  flip(currentCol, currentRow);
  flip(currentCol-1, currentRow);
  flip(currentCol+1, currentRow);
  flip(currentCol, currentRow-1);
  flip(currentCol, currentRow+1);

  //When holding shift, you can change only one tile
  if(mousePressed + keyCode(16))
  {
    flip(currentCol, currentRow);
  }
}

function flip(col, row)
{
  //Given a column and row for the 2D array, flip its value from 0 to 255 or
  // 255 to 0
  //Conditions ensure that the col and row given are valid and exist for the
  // array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS )
    {
    if (row >= 0 && row < NUM_ROWS)
      {
      if (gridData[row][col] === 0)
        {
          gridData[row][col] = 255;
        }
      else
      {
        gridData[row][col] = 0;
      }
    }
  }
}

function determineActiveSquare()
{
  //An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid()
{
  //Render a grid of squares - fill color set according to data stored in the
  // 2D array
  for (let x = 0; x < NUM_COLS ; x++)
    {
    for (let y = 0; y < NUM_ROWS; y++)
      {
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}