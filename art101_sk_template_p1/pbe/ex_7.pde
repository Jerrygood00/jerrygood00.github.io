/* @pjs preload= "9aa94545e23390d.png, piq_45023_400x400.png, pixel_barracuda_fish_vector_by_raukhaul_au-dampe8u.png, 36bb541d062f6b4.png"; */
int numFishs = 15;
float spring = 0.03;
float gravity = 0.10;
float friction = -0.9;
Fish[] fishs = new Fish[numFishs];
PImage a;
PImage b;
PImage c;
PImage d;
void setup() {
  size(1280,620);
    frameRate(10);
  smooth();
     a = loadImage("9aa94545e23390d.png");
     b = loadImage("piq_45023_400x400.png");
     c = loadImage("pixel_barracuda_fish_vector_by_raukhaul_au-dampe8u.png");
     d = loadImage("36bb541d062f6b4.png");
  for (int i = 0; i < numFishs; i++) {
    fishs[i] = new Fish(random(width*4), random(height*4),100, i, fishs);
  }
  for (int j = 0; j < numFishs; j++) {
    fishs[j] = new Fish(random(width*4), random(height*4),100, j, fishs);
  }
  noStroke();
}

void draw() {
  background(a);
  for (Fish fish : fishs) {
    fish.collide();
    fish.move();
    fish.display(); 
    fish.flow();
  }
  
  //if (frameCount >300) {
  //  exit();
  //}
  
  //saveFrame("frames/fish-####.png");
  //println("´frame" + frameCount);
}

class Fish {
  
  float x, y;
  float diameter;
  float vx = 0;
  float vy = 0;
  int id;
  Fish[] others;
  Fish(float xin, float yin, float din, int idin, Fish[] oin) {
    x = xin;
    y = yin;
    diameter = din;
    id = idin;
    others = oin;
 
  } 
  
  void collide() {
    for (int i = id + 1; i < numFishs; i++) {
      float dx = others[i].x - x;
      float dy = others[i].y - y;
      float distance = sqrt(dx*dx + dy*dy);
      float minDist = others[i].diameter/2 + diameter/2;
      if (distance < minDist) { 
        float angle = atan2(dy, dx);
        float targetX = x + cos(angle) * minDist;
        float targetY = y + sin(angle) * minDist;
        float ax = (targetX - others[i].x) * spring;
        float ay = (targetY - others[i].y) * spring;
        vx -= ax;
        vy -= ay;
        others[i].vx += ax;
        others[i].vy += ay;
      }
    }   
  }
  
  void move() {
    vy += gravity;
    x += vx;
    y += vy;
    if (x + diameter/2 > width) {
      x = width - diameter/2;
      vx *= friction; 
    }
    else if (x - diameter/2 < 0) {
      x = diameter/2;
      vx *= friction;
    }
    if (y + diameter/2 > height) {
      y = height - diameter/2;
      vy *= friction; 
    } 
    else if (y - diameter/2 < 0) {
      y = diameter/2;
      vy *= friction;
    }
  }
  
  void display() {
     pushMatrix();
    image(b,x,y,diameter,diameter);
    float angle = tan(random(500));
       translate(500, 220);
      rotate(angle/2);
      scale(random(.4,.5));
    image(d,5,5);
    float angleOne = tan(random(500));
       translate(300, 220);
      rotate(angleOne/2);
      scale(random(.4,.5));
    image(d,5,5);
    popMatrix();
  }
   void flow() {
     pushMatrix();
  float angle = tan(600);
       //translate(-100,0);
        translate(mouseX-640,mouseY-310);
      rotate(angle/2);
      scale(.5,.5);
          image(c,x*2,y*2);
           popMatrix();
      
}
}