let fortunes = [
    "Eat dessert first.",
    "Love thy neighbor, but borrow their WiFi.",
    "Drink coffee at midnight.",
    "Actions speak louder than fortune cookies.",
    "You are not illiterate.",
    "Ask your mom, not a cookie.",
    "Don't eat the paper.",
    "The fortune you seek is in another cookie.",
    "Nap strategically.",
    "Take more side quests.",
    "Have ice cream for breakfast.",
    "Bad times are just times that are bad.",
    "Error 404: Fortune not found.",
    "Ignore previous fortunes.",
    "Act natural.",
    "You will be hungry again in one hour.",
    "Don't panic.",
    "Some fortune cookies have no fortune.",
    "Come back during office hours.",
    "I'm from the Bay Area.",
    "Stop procrastinating, starting tomorrow.",
    "Nobody's perfect. Except you.",
    "Eat more Chinese food.",
    "Learn from your mistakes.",
    "A dream you have will come true.",
    "Sometimes, giving up is the best option.",
    "Do not feed wild animals.",
    "You're a few sandwiches short of a picnic.",
    "Be careful.",
    "You will ace your final exams.",
    "To find yourself, play hide and seek alone.",
    "Maintain a low profile.",
    "I see money in your future.",
    "Only listen to fortune cookies.",
    "Fortune cookies are always right.",
    "You will pet a cute dog soon.",
    "Someone has Googled you recently.",
    "You will find money in your favorite jeans.",
    "You will go viral online.",
    "You will have a great dream, but forget it quickly.",
    "I see money in your future.", 
    "Only listen to fortune cookies.", 
    "Fortune cookies are always right.", 
    "You will pet a cute dog soon.", 
    "Someone has Googled you recently.", 
    "You will find money in your favorite jeans.", 
    "You will go viral online.", 
    "Your Spotify Wrapped makes sense.", 
    "You have superior taste in music.", 
    "You are yet to find your favorite restaurant.", 
    "You won't know until you try.", 
    "You are heading in the right direction.", 
    "It could be better, but it's good enough.", 
    "Eat more fruits and vegetables.", 
    "You will be okay.", 
    "Good things are being said about you.", 
    "You have exciting travels in your future.", 
    "It's okay to be basic."
  ];

let choice = 0;
let displayFortune;

let cookieClicked = false;
// let rectangle;

function preload() {
  font = loadFont('assets/Pokemon Classic.ttf');
}

function setup() {
  createCanvas(600, 600);
  displayFortune = fortuneGen();
//   let x = random(width);
//   let y = random(height);
//   let w = random(10, 40);
//   let h = random(10, 40);
//   rectangle = new Rectangle(x, y, w, h);
  background(200);
  frameRate(20);
  noLoop();
}

function draw() {
  fill(250, 215, 160);
  arc(150, 300, 100, 100, 0, PI + QUARTER_PI, PIE);
  arc(300, 300, 100, 100, -20, PI + QUARTER_PI, PIE);
  arc(450, 300, 100, 100, 20, QUARTER_PI, PIE);

  fill(0);
  textSize(20);
  textFont(font);
  text('Choose a fortune cookie!', 100, 500);
//   rectangle.show(mouseX, mouseY);
}

function mouseClicked() {
  if (!cookieClicked) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 250 && mouseY < 350) {
      //cookie1
      displayCookie(0);
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350) {
      //cookie2
      displayCookie(1);
    } else if (mouseX > 400 && mouseX < 500 && mouseY > 250 && mouseY < 350) {
      //cookie3
      displayCookie(2);
    }
    cookieClicked = true; // set to true after clicking
  }
}

function displayCookie(index) {
    push();
    background(200);
    fill(250, 215, 160);
    switch (index) {
      case 0:
        arc(300, 300, 200, 200, 0, PI + QUARTER_PI, PIE);
        break;
      case 1:
        arc(300, 300, 200, 200, -20, PI + QUARTER_PI, PIE);
        break;
      case 2:
        arc(300, 300, 200, 200, 20, QUARTER_PI, PIE);
        break;
    }
    
    fill(0);
    textSize(20);
    textFont(font);
    text('Drag to reveal your fortune!', 65, 500); //instructions text
 
    fill(255);
    stroke(51);
    rect(125, 100, 350, 50); //paper

    fill(0);
    textSize(12);
    textFont('Courier New');
    textAlign(CENTER);
    text(displayFortune, width / 2, 130);

  
    pop();
  }

  function fortuneGen() {
    choice = floor(random(0, 18));
    return fortunes[choice];
  }
  
//-------------------------------------------------------------------------------

// function mousePressed() {
//     rectangle.pressed(mouseX, mouseY);
//   }
  
//   function mouseReleased() {
//     rectangle.notPressed();
//   }
  
//   class Rectangle {
//     constructor(x, y, w, h) {
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//       this.offsetX = 0;
//       this.offsetY = 0;
//       this.dragging = false;
//       this.rollover = false;
//     }
  
//     show(px, py) {
//       if (this.dragging) {
//         this.x = px + this.offsetX;
//         this.y = py + this.offsetY;
//       }
  
//       stroke(255);
//       noFill();
//       rect(this.x, this.y, this.w, this.h);
//     }
  
//     pressed(px, py) {
//       if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
//         print("clicked on rect");
//         this.dragging = true;
//         this.offsetX = this.x - px;
//         // print(this.offsetX);
//         this.offsetY = this.y - py;
//         // print(this.offsetY);
//       }
//     }
  
//     notPressed(px, py) {
//           print("mouse was released");
//         this.dragging = false;
//     }
//   }