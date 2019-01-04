String[] headlines = { "I saw this coming", "Only if the cheat is here", "More and more despair" }; 
PFont f; 
float x;
int index = 0; 
void setup() {
  size(800, 800);
  printArray(PFont.list());
  f = createFont("Cooper Black", 64);
  textFont(f);
  fill(0, 255, 0);
  noStroke();
  text("I am not here", 100, 500);
  f = createFont("Arial", 64, true);
  x = width;
}

void draw() {
background(255); 
  fill(0); 
  rect(0, 0, width, height);
  randomDots();
  f = createFont("Cooper Black", 54);
   textFont(f);
   fill(255, 200, 0);
   text("I AM SADDDDDDDDD", 100, 400);
   fill(180,70);
  textAlign(RIGHT);
  myDrawType("THIS", mouseX, mouseY);
  textAlign(CENTER);
  myDrawType("EXERCISE", mouseX, mouseY+100);
  textAlign(LEFT);
  myDrawType("IS", mouseX, mouseY+200);
  textAlign(BOTTOM);
  myDrawType("TROLL", mouseX, mouseY+300);
  // Display headline at x location 
  textFont(f, 16); 
  textAlign(LEFT); 
  text(headlines[index], x, 180); 
  x = x - 3; 
  float w = textWidth(headlines[index]); 
  if (x < -w) { 
    x = width; 
    index = (index + 1) % headlines.length;
  }
}
void randomDots() {
  float r = random(50);
  float rloop = random(100);
  for (int i = 0; i < r; i++) {
    fill(r+400,rloop+100, random(255));
    ellipse(random(height), random(width),random(r+150),random(r+10));
  }
}
void myDrawType(String s, int x, int y ) {
  fill(255);
  text(s, x, y);
  fill(255);
  rect(x/2, y/2, 10, 10);
}