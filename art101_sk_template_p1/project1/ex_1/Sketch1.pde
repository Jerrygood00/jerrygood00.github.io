
float a = 20;
float rand = .45;
void setup(){
//(height,width);
size(500, 500);
rectMode(CENTER);
frameRate(19);
}

void draw() {
for(int i=0; i<height; i+=10) {
  rand = random(abs(sin(a)*255));
  fill(rand);
  rect(a, i, width, 5,10,10,10,10);
  rect(i, a, 5, height,10,10,10,10);
  fill(random(255),random(255),random(255));
  triangle(mouseX, mouseY, 58, 20, 86,80);
  point(mouseX,mouseY);
}
}
