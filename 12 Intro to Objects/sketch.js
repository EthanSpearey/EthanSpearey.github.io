// Intro to Objects
// Ethan Spearey
// 2024-10-10

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook", "Ethan Spearey", "leatherbound", 515, 1234567891011, width*0.3);
  hisBook = new Book("The Hobbit", "J. R. R. Tolkien", "softcover", 336, 9780547928227, width*0.3)
}

function draw() {
  background(220);
  myBook.display();
  hisBook.display();
}

class Book {
  //1. Constructor
  constructor(title, author, coverType, pages, isbn, x) {
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.x = x;
  }

  //2. Class Methods
  printSummary() {
    //Print out a nicely formatted description of object
    print(this.title + "by" + this.author);
    print("length: " + this.pages + "pages.");
    print("coverType: " + this.coverType);
    print("ISBN:" + this.isbn);
  }

  display() {
    //Visualize the book based on its properties
    //Width depends on pages (1/10 Scale)
    rectMode(CENTER); textAlign(CENTER, CENTER);
    switch (this.coverType) {
    case "softcover":
      fill(250, 200, 200); break;
    case "hardcover":
      fill(120, 255, 240); break;
    case "leatherbound":
      fill(150, 100, 15); break;
    }
    rect(this.x, height / 2, this.pages / 10, 150);
    textSize(20); fill(255);
    text(this.title[0], this.x, height / 2 - 50);
  }
}