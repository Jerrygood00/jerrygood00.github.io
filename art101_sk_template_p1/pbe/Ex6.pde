/* @pjs preload= "spr_bubblecar_0.png, Toon Road Texture.png, spr_estatecar_0.png, spr_vintage_0.png"; */
//v1 holds date from "car"
vehicle v1;
vehicle v2;
vehicle v3;
vehicle v4;
vehicle v5;
vehicle v6;
vehicle v7;
vehicle v8;

PImage a;
PImage b;
PImage c;
PImage d;
int num = 50;
int[] x = new int[num];
int[] y = new int[num];

void setup() {
  a = loadImage("spr_bubblecar_0.png");
b = loadImage("Toon Road Texture.png");
c = loadImage("spr_estatecar_0.png");
d = loadImage("spr_vintage_0.png");
size (500,500);
noStroke();
background(b);

//birthing a new instance
v1= new vehicle(2);
v2= new vehicle(.75);
v3= new vehicle(1.75);
v4= new vehicle(.75);
v5= new vehicle(1);
v6= new vehicle(1);
v7= new vehicle(.75);
v8= new vehicle(1.75);

}

void draw() {
   background(b);
   for (int i = num-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX;
  y[0] = mouseY;
   for (int i = 0; i < num; i++) {
    ellipse(x[i], y[i], i/2.0, i/2.0);
  }
   v1.move();
   v1.update();
   
   v2.move();
   v2.update();
   
   v3.move();
   v3.update();
   
   v4.move();
   v4.update();
   
      v5.move();
   v5.update();
   
      v6.move();
   v6.update();
   
      v7.move();
   v7.update();
   
      v8.move();
   v8.update();
}

void vehicle () {
  image(a,20,70,40,5);
  image(c,20,70,40,5);
  image(d,20,70,40,5);
}
class vehicle {
  float lox;
  int loy;
  float acc;
  //constructor //it is like setup
  vehicle (float sp) {
    lox = int(random(50,200));
    loy = int(random(50,400));
    acc = sp;
  }
  
  
  
  void move () {
    lox += acc;
    if (lox  > width || lox < 0) {
      acc= -acc;
    }
     
  }
  void update() {
     pushMatrix();
           //scale(random(.1,1.0));
     image(a,lox,loy,100,70);
          float angle = atan2(mouseY - 100, mouseX - 100);
       translate(500, 100);
      rotate(angle);
      scale(random(.1,1.0));
    image(c,lox,loy,100,70);
    
     popMatrix();
  }
}