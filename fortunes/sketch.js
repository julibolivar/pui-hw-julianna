let cookieClicked = false;

var font;

function preload() {
  font = loadFont('Redaction100-Regular.otf');
}

function setup() {
    createCanvas(600, 600);
    // textFont('Courier New');
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
    text("Choose a fortune cookie!", 195, 500);
}

function mouseClicked() {
    if (!cookieClicked) {
        if (mouseX > 100 && mouseX < 200 && mouseY > 250 && mouseY < 350) { //cookie1
            displayCookie(0);
        } else if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350) { //cookie2
            displayCookie(1);
        } else if (mouseX > 400 && mouseX < 500 && mouseY > 250 && mouseY < 350) { //cookie3
            displayCookie(2);
        }
        cookieClicked = true; // Set the flag to true after clicking
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
    text("Keep clicking to break it open!", 165, 500);
    pop();
}
