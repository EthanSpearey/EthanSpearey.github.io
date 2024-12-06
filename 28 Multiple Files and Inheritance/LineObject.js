//Child Class 1 - Line Obj

class LineObject extends AnimatedObject
{
  constructor()
  {
    super(random(width), random(height));
  }
  move() //Overriding, but building onn top of parent's move() function
  {
    super.move();
    this.x -= 5;
    if(this.x < 0)
    {
      this.x = width;
    }
  }
  display()
  {
    if(mouseIsPressed)
    {
      strokeWeight(10);
    }
    else
    {
      strokeWeight(2);
    }
    line(this.x, this.y, this.x + 15, this.y);
  }
}