/* @pjs preload= "giphy.png,pixel_tank_2_by_masterterrorist-d6tzto7.png"; */
int v = 10;
float b = 255;
PImage c;
PImage a;
void setup() {
  size(1000, 1000);
  rectMode(CENTER);
  c = loadImage("giphy.png");
  a = loadImage("pixel_tank_2_by_masterterrorist-d6tzto7.png");
  smooth();
}

void draw() {
  background(random(v)); 
  fill(v);
  rect(100, 100, 300, 300);
  rect(300, 100, 50, 50);
  fill(v); 
  ellipse(width/2, height/2, 100, 100);
for ( int n = 0; n < width; n += 50 ) {
    fill(mouseX, mouseY, 500, 800);
    rect(v, height/2, 20, height);
    image(c, mouseX, mouseY);
  } 
  v++;
  if (v > 255) {
    v = -v;
  }
  
  fill(v, 204);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(v, 204);
}

void mouseMoved() {
  v = v + 10;
  if (v > 255) {
    v = 0;
    v+= 10;
  }
}

void keyPressed() { 
  int a=100;
   if (mouseButton == LEFT) {
    fill(a);
  } else if (mouseButton == RIGHT) {
    fill(random(a));
  } else {
    fill(110);
  }
    }
void mouseReleased() {
  if (v == 0) {
    v = 0;
  } else {
    rect(500,500,500,500);
    image(a,300,300);
  }
}
