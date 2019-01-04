float a = 2;
float inc = PI/10.0; 
float c = 0;
String gridName = "tangle";
void setup() {
  size(500,500);
  smooth(); 
  frameRate(30);
}
 
void draw() {
  background(c);
  fill(c,inc);
  translate(50,50);
  rotate(120);
  println("The range = " + inc + " Circle ");
  stroke (random(tan(a)*300.0 - 100,0));
  for (float i=0; i<300; i+=5) {
    ellipse(i, 50, i, 50+sin(a)*50.0);
    println("gridName = " + a + "The sin = " +sin(a));
    a = a + inc;
    inc = -inc;
    a = -a;
  }
}
