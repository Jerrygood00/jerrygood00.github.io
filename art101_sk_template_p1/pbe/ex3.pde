/* @pjs preload= "giphy.png,pixel_tank_2_by_masterterrorist-d6tzto7.png"; */
int spec = 10;
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
  background(255-spec); 
  fill(spec);
  rect(100, 100, 300, 300);
  rect(300, 100, 50, 50);
  fill(spec); 
  ellipse(width/2, height/2, 100, 100);
for ( int spec = 0; spec < width; spec += 50 ) {
    fill(mouseX, mouseY, 500, 800);
    rect(spec, height/2, 20, height);
    image(c, mouseX, mouseY);
  } 
  spec++;
  if (spec > 255) {
    spec = -spec;
  }
  
  fill(spec, 204);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(spec, 204);
}

void mouseMoved() {
  spec = spec + 10;
  if (spec > 255) {
    spec = 0;
    spec+= 10;
  }
}

void keyPressed() { 
  float a=100;
   if (mouseButton == LEFT) {
    fill(a);
  } else if (mouseButton == RIGHT) {
    fill(random(a));
  } else {
    fill(110);
  }
    }
void mouseReleased() {
  if (spec == 0) {
    spec = 0;
  } else {
    rect(500,500,500,500);
    image(a,300,300);
  }
}