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
    "It's okay to be basic.",
    "Be true to yourself.",
    "Binge-watching Netflix is okay.",
    "Practice daily self-affirmations.",
    "Drink more water.",
    "Stay in touch with your friends.",
    "Don't drunk text your ex.",
    "Make good choices."
  ];
  
  let choice = 0;
  let displayFortune;
  
  let cookieClicked = false;
  let drawRotatingArcs = true;
  let drawChooseText = true;
  
  function preload() {
    font = loadFont('assets/Pokemon Classic.ttf');
  }
  
  function setup() {
    createCanvas(600, 600).parent('container');
    displayFortune = fortuneGen();
    frameRate(20);
  }
  
  function resetSketch() {
    location.reload();
  }
  
  //-----------------------draw()---------------------------------
  
  function draw() {
    fill(250, 215, 160);
  
    if (drawRotatingArcs) {
      background(45, 45, 155);
  
      push();
      translate(150, 300);
      rotate(frameCount / 50.0);
      ellipseMode(CENTER);
      arc(0, 0, 100, 100, 0, PI + QUARTER_PI, PIE);
      pop();
  
      push();
      translate(300, 300);
      rotate(frameCount / 50.0);
      ellipseMode(CENTER);
      arc(0, 0, 100, 100, -20, PI + QUARTER_PI, PIE);
      pop();
  
      push();
      translate(450, 300);
      rotate(frameCount / 50.0);
      ellipseMode(CENTER);
      arc(0, 0, 100, 100, 20, QUARTER_PI, PIE);
      pop();
    }
  
    if (drawChooseText) {
      fill(255);
      textSize(20);
      textFont(font);
      text('Choose a fortune cookie!', 100, 150);
    }
  }
  
  //-----------------------mouseClicked()---------------------------------
  
  function mouseClicked() {
    if (!cookieClicked) {
      if (mouseX > 100 && mouseX < 200 && mouseY > 250 && mouseY < 350) {
        // cookie1
        displayCookie(0);
      } else if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350) {
        // cookie2
        displayCookie(1);
      } else if (mouseX > 400 && mouseX < 500 && mouseY > 250 && mouseY < 350) {
        // cookie3
        displayCookie(2);
      }
      cookieClicked = true;
      drawRotatingArcs = false;
      drawChooseText = false;
    }
  }
  
  //-----------------------cookie pages---------------------------------
  
  function displayCookie(index) {
    push();
    background(45, 45, 155);
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
  
    fill(255);
    stroke(51);
    rect(125, 472, 350, 50); //paper
  
    fill(255);
    textSize(20);
    textFont(font);
    text('Your fortune says...', 140, 150); //txt
  
    fill(0);
    textSize(12);
    textFont('Courier New');
    textAlign(CENTER);
    text(displayFortune, width / 2, 500); //fortune txt
  
    
    let resetButton = createButton("Reset");
    resetButton.parent("container"); //div for button
    resetButton.position(25, 25, 'relative'); //constrain button to sketch
    resetButton.mousePressed(resetSketch);
  
    pop();
  }
  
  //-----------------------fortunes function---------------------------------
  
  function fortuneGen() {
    choice = floor(random(0, 43));
    return fortunes[choice];
  }

  