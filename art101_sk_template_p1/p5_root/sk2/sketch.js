
var v = 255;
var b = 255;
var img;
var img2;
function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
   img = loadImage('assets/giphy.png');
   img2 = loadImage('assets/pixel_tank_2_by_masterterrorist-d6tzto7.png');
}

function draw() {
  background(random(1,255));
  for ( var n = 0; n < width; n += 50 ) {
  rect(n, height/2, 20, height);
  fill(mouseX, mouseY, 500, 800);
  image(img2, mouseX/2+10, mouseY/2+10);
  rect(100, 100, 300, 300);
  fill(random(v));
  rect(300, 100, 50, 50);
  fill(random(v));
  ellipse(width/2, height/2, 100, 100);
  }
  if (v > 255) {
    v = -v;
    v++;
  }
  fill(v, 204);
  rect(mouseX, mouseY, mouseX/2+10, mouseY/2+10);

  if (mouseButton == LEFT) {
    translate(50,50);
    rotate(100);
    image(img,10,10);
    image(img,10,150);
    image(img,10,300);
    // rotate(PI / 3.0);
  }
  else if (mouseButton == RIGHT) {
    translate(500,50);
    image(img2,10,50);
    }
}

function mouseMoved() {
  v = v + 10;
  if (v > 255) {
    v = 0;
    v+= 10;
  }
}
