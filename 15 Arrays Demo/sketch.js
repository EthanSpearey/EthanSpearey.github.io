// Arrays Demo
// Ethan Spearey
// 2024-10-17

let names = ['John', 'Jane', 'Stefan'];

function setup()
{
  createCanvas(windowWidth, windowHeight);
  names.push('Liam');
  console.log(names);

  let nameLast = names.pop();
  console.log(names);
  console.log(nameLast);

  let nameFirst = names.shift();
  console.log(names);
  console.log(nameFirst);

  names.push('Samperson the Conqueror III');
  names.push('Bobert');
  names.push('Kristin');
  names.push('Moronica');

  for (n of names)
  {
    console.log(n);
  }

  console.log(random(names));
}

function draw()
{
  background(220);
}